// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.get('/list', feedbackController.listPerformanceReviewsNeedingFeedback);
router.post('/submit', feedbackController.submitFeedback);

module.exports = router;
