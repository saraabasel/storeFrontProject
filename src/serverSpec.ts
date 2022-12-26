import app from './server';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('tests GET  /users', async () => {
        const response = await request.get('/users').send
        ({"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZm5hbWUiOiJzYXJhIiwidXNlcl9sbmFtZSI6Im1vc3RhZmEiLCJ1c2VyX2VtYWlsIjoibWFuYWxhaG1lZHRlc3Rtb3N0YWZhOTMzNUBnbWFpbC5jb20ifSwiaWF0IjoxNjcxOTk0ODI5fQ.8HOSCxeULRJE36eNyOJG_KTuS4GwrGOF22zLdd9NfWs"});
        expect(response.status).toBe(200);
    });

    it('tests GET /users/:id', async () => {
        const response = await request.get('/users/1').
        send({"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZm5hbWUiOiJzYXJhIiwidXNlcl9sbmFtZSI6Im1vc3RhZmEiLCJ1c2VyX2VtYWlsIjoibWFuYWxhaG1lZHRlc3Rtb3N0YWZhOTMzNUBnbWFpbC5jb20ifSwiaWF0IjoxNjcxOTk0ODI5fQ.8HOSCxeULRJE36eNyOJG_KTuS4GwrGOF22zLdd9NfWs"});
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
        const response =  await request.post('/products').send({"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZm5hbWUiOiJzYXJhIiwidXNlcl9sbmFtZSI6Im1vc3RhZmEiLCJ1c2VyX2VtYWlsIjoibWFuYWxhaG1lZHRlc3Rtb3N0YWZhOTMzNUBnbWFpbC5jb20ifSwiaWF0IjoxNjcxOTk0ODI5fQ.8HOSCxeULRJE36eNyOJG_KTuS4GwrGOF22zLdd9NfWs"});
        expect(response.status).toBe(200);
    });

});