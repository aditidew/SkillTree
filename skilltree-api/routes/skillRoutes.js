const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// GET all skills
router.get('/', async (req, res) => {
  const skills = await Skill.find().populate('prerequisiteSkill');
  res.json(skills);
});

// POST a new skill
router.post('/', async (req, res) => {
  const { name, description, level, prerequisiteSkill } = req.body;
  const newSkill = new Skill({ name, description, level, prerequisiteSkill });
  await newSkill.save();
  res.status(201).json(newSkill);
});

// PUT update skill
router.put('/:id', async (req, res) => {
  const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedSkill);
});

// DELETE a skill
router.delete('/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: 'Skill deleted' });
});

module.exports = router;

router.post('/', async (req, res) => {
  try {
    const { name, level } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * @swagger
 * /skills:
 *   get:
 *     summary: Get all skills
 *     responses:
 *       200:
 *         description: List of skills
 */
router.get('/', async (req, res) => {
  const skills = await Skill.find().populate('prerequisiteSkill');
  res.json(skills);
});
