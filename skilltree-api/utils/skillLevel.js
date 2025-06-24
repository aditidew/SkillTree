function getSkillLevel(points) {
  if (points >= 100) return 'Advanced';
  if (points >= 50) return 'Intermediate';
  return 'Beginner';
}
module.exports = { getSkillLevel };
