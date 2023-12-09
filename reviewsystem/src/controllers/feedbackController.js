
const Feedback = require('../models/Feedback');
const PerformanceReview = require('../models/PerformanceReview');

exports.listPerformanceReviewsNeedingFeedback = async (req, res) => {
  try {

    const performanceReviewsNeedingFeedback = await PerformanceReview.find();
    res.render('feedbackList', { performanceReviews: performanceReviewsNeedingFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.submitFeedback = async (req, res) => {
  try {
    const { performanceReviewId, feedbackText } = req.body;
    const submittedBy = req.user._id;
    const newFeedback = new Feedback({ performanceReview: performanceReviewId, feedbackText, submittedBy });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
