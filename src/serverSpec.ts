import app from './server';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('tests GET  /users', async () => {
        const response = await request.get('/users');
        expect(response.status).toBe(200);
    });
    it('tests POST /users', async () => {
        const response = await request.post('/users');
        expect(response.status).toBe(200);
    });

    it('tests GET /products', async () => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
    });
});