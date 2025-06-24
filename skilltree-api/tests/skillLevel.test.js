const { getSkillLevel } = require('../utils/skillLevel');

describe('getSkillLevel()', () => {
  test('returns Beginner', () => {
    expect(getSkillLevel(30)).toBe('Beginner');
  });

  test('returns Intermediate', () => {
    expect(getSkillLevel(60)).toBe('Intermediate');
  });

  test('returns Advanced', () => {
    expect(getSkillLevel(120)).toBe('Advanced');
  });
});
