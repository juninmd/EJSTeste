const request = require('supertest');
const app = require('../index');

describe('App Unit Tests', () => {
    test('should have EJS view engine configured', () => {
        expect(app.get('view engine')).toBe('ejs');
    });

    test('should respond with rendered HTML on GET /', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.text).toContain('Funcionou');
        expect(res.headers['content-type']).toMatch(/html/);
    });

    test('should return 404 for unknown routes', async () => {
        const res = await request(app).get('/nonexistent');
        expect(res.status).toBe(404);
    });
});
