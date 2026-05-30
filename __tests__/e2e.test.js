const http = require('http');
const server = require('../server');

describe('E2E Server Tests', () => {
    afterAll((done) => {
        server.close(done);
    });

    test('server should be running and respond to health check', (done) => {
        http.get('http://localhost:4000/', (res) => {
            expect(res.statusCode).toBe(200);
            done();
        }).on('error', (err) => {
            done(err);
        });
    });

    test('response should contain expected content', (done) => {
        http.get('http://localhost:4000/', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                expect(data).toContain('Funcionou');
                done();
            });
        }).on('error', (err) => {
            done(err);
        });
    });

    test('server should handle HEAD request', (done) => {
        const req = http.request('http://localhost:4000/', { method: 'HEAD' }, (res) => {
            expect(res.statusCode).toBe(200);
            done();
        });
        req.end();
    });
});
