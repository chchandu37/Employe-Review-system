
const mongoose = require('mongoose');

const performanceReviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
  feedbacks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }],
});

module.exports = mongoose.model('PerformanceReview', performanceReviewSchema);
