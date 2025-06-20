const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  level: { type: Number, default: 0 }, // 0 to 100
  prerequisiteSkill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
    default: null
  }
});

module.exports = mongoose.model('Skill', skillSchema);