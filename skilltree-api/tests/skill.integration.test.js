const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const Skill = require('../models/Skill');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/skilltree-test');
}, 10000); // ⬅️ timeout for slow DB

afterAll(async () => {
  if (mongoose.connection.readyState === 1 && mongoose.connection.db) {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  }
}, 10000);

describe('POST /api/skills', () => {
  it('should create a new skill', async () => {
    const res = await request(app)
      .post('/api/skills')
      .send({ name: 'JavaScript', level: 80 });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('JavaScript');
  }, 10000);
});
