
// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  techStack: [String],
  image: String,
  github: String,
  liveDemo: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
