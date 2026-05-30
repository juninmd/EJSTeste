const request = require('supertest');
const app = require('../index');

describe('Integration Tests', () => {
    test('GET / should return status 200 with valid HTML', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toMatch(/html/);
        expect(res.text).toContain('Funcionou');
    });

    test('GET / should not expose stack traces in production', async () => {
        const res = await request(app).get('/');
        expect(res.text).not.toContain('Error:');
        expect(res.text).not.toContain('at ');
    });

    test('server should handle concurrent requests', async () => {
        const promises = Array.from({ length: 10 }, () => request(app).get('/'));
        const results = await Promise.all(promises);
        results.forEach((res) => {
            expect(res.status).toBe(200);
            expect(res.text).toContain('Funcionou');
        });
    });
});
