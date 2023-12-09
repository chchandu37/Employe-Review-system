
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  performanceReview: { type: mongoose.Schema.Types.ObjectId, ref: 'PerformanceReview', required: true },
  feedbackText: { type: String, required: true },
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
