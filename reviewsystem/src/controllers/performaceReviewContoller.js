
const PerformanceReview = require('../models/PerformanceReview');
const Employee = require('../models/Employee');
exports.getPerformanceReviews = async (req, res) => {
  try {
    const performanceReviews = await PerformanceReview.find().populate('participants', 'name');
    res.render('performanceReviews', { performanceReviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.addPerformanceReview = async (req, res) => {
  try {
    const { title, participants } = req.body;

    const newPerformanceReview = new PerformanceReview({ title, participants });
    await newPerformanceReview.save();
    
    res.status(201).json({ message: 'Performance review added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.assignParticipants = async (req, res) => {
  try {
    const { performanceReviewId, participantIds } = req.body;
    const performanceReview = await PerformanceReview.findById(performanceReviewId);
    if (!performanceReview) {
      return res.status(404).json({ error: 'Performance review not found' });
    }

    const participants = await Employee.find({ _id: { $in: participantIds } });
    if (participants.length !== participantIds.length) {
      return res.status(404).json({ error: 'One or more participants not found' });
    }
    performanceReview.participants = participantIds;
    await performanceReview.save();

    res.status(200).json({ message: 'Participants assigned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
