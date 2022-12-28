import app from './server';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('tests GET  /users', async () => {
        const response = await request.get('/users');
        expect(response.status).toBe(200);
    });

    it('tests GET /users/:id', async () => {
        const response = await request.get('/users/1');
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

    it('tests GET /products/:id', async () => {
        const response = await request.get('/products/1');
        expect(response.status).toBe(200);
    });

    it('tests POST /products', async () => {
        const response =  await request.post('/products');
        expect(response.status).toBe(200);
    });

    it('tests GET /orders/:user_id', async () => {
        const response =  await request.get('/orders/1');
        expect(response.status).toBe(200);
    });

    it('tests GET /current/orders/:user_id', async () => {
        const response =  await request.get('/orders/current/1');
        expect(response.status).toBe(200);
    });

    it('tests GET /orders/completed/:user_id', async () => {
        const response =  await request.get('/orders/completed/1');
        expect(response.status).toBe(200);
    });


});