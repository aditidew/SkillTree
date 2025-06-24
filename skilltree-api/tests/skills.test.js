
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');

let createdSkillId = null;

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/skilltree-test');
}, 10000);

afterAll(async () => {
  if (mongoose.connection.readyState === 1 && mongoose.connection.db) {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  }
}, 10000);

describe('Skill API - Create, Update, Delete, and Error Tests', () => {
  test('POST /api/skills → should create a new skill', async () => {
    const res = await request(app)
      .post('/api/skills')
      .send({ name: 'Node.js', level: 20 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    createdSkillId = res.body._id;
  }, 10000);

  test('PUT /api/skills/:id → should update the skill', async () => {
    const res = await request(app)
      .put(`/api/skills/${createdSkillId}`)
      .send({ name: 'Node.js', level: 50 });
    expect(res.statusCode).toBe(200);
  }, 10000);

  test('DELETE /api/skills/:id → should delete the skill', async () => {
    const res = await request(app).delete(`/api/skills/${createdSkillId}`);
    expect(res.statusCode).toBe(200);
  }, 10000);

  test('POST /api/skills → should return 400 for missing name', async () => {
    const res = await request(app)
      .post('/api/skills')
      .send({ level: 10 });
    expect(res.statusCode).toBe(400);
  }, 10000);

  test('PUT /api/skills/invalid-id → should return 400 or 404', async () => {
    const res = await request(app)
      .put('/api/skills/invalid-id')
      .send({ name: 'HTML', level: 40 });
    expect([400, 404]).toContain(res.statusCode);
  }, 10000);

  test('DELETE non-existent ID → should return 404', async () => {
    const res = await request(app).delete('/api/skills/507f1f77bcf86cd799439011');
    expect(res.statusCode).toBe(404);
  }, 10000);
});
