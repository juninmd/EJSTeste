import http, { type IncomingMessage, type RequestOptions } from 'http';
import server from '../server.js';
import { describe, test, afterAll, expect } from '@jest/globals';

describe('E2E Server Tests', () => {
    afterAll(async () => {
        await new Promise<void>((resolve, reject) => {
            server.close((err) => (err ? reject(err) : resolve()));
        });
    });

    test('server should be running and respond to health check', async () => {
        const res = await httpRequest('http://localhost:4000/');
        expect(res.statusCode).toBe(200);
    });

    test('response should contain expected content', async () => {
        const { data, statusCode } = await httpGetWithData('http://localhost:4000/');
        expect(statusCode).toBe(200);
        expect(data).toContain('Funcionou');
    });

    test('server should handle HEAD request', async () => {
        const res = await httpRequest('http://localhost:4000/', { method: 'HEAD' });
        expect(res.statusCode).toBe(200);
    });
});

function httpRequest(url: string, options?: RequestOptions): Promise<IncomingMessage> {
    return new Promise((resolve, reject) => {
        const req = http.request(url, { method: 'GET', ...options }, (res) => {
            resolve(res);
        });
        req.on('error', reject);
        req.end();
    });
}

function httpGetWithData(url: string): Promise<{ data: string; statusCode: number | undefined }> {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', (chunk: string) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve({ data, statusCode: res.statusCode });
            });
        }).on('error', reject);
    });
}
