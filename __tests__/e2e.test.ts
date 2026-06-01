import http from 'http';
import server from '../server.js';

function httpGet(url: string): Promise<{ statusCode: number; data: string }> {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve({ statusCode: res.statusCode ?? 0, data });
            });
            res.on('error', reject);
        }).on('error', reject);
    });
}

function httpHead(url: string): Promise<{ statusCode: number }> {
    return new Promise((resolve, reject) => {
        const req = http.request(url, { method: 'HEAD' }, (res) => {
            res.resume();
            resolve({ statusCode: res.statusCode ?? 0 });
        });
        req.on('error', reject);
        req.end();
    });
}

describe('E2E Server Tests', () => {
    afterAll(async () => {
        await new Promise<void>((resolve, reject) => {
            server.close((err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    });

    test('server should be running and respond to health check', async () => {
        const res = await httpGet('http://localhost:4000/');
        expect(res.statusCode).toBe(200);
    });

    test('response should contain expected content', async () => {
        const res = await httpGet('http://localhost:4000/');
        expect(res.data).toContain('Funcionou');
    });

    test('server should handle HEAD request', async () => {
        const res = await httpHead('http://localhost:4000/');
        expect(res.statusCode).toBe(200);
    });
});
