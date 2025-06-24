const request = require('supertest');
const app = require('../server');

describe('GET /api/skills', () => {
  it('should return a list of skills', async () => {
    const res = await request(app).get('/api/skills');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  }, 10000); // ⬅️ extend timeout
});
