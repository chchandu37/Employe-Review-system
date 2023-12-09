// routes/performanceReviewRoutes.js
const express = require('express');
const router = express.Router();
const performanceReviewController = require('../controllers/performanceReviewController');

router.get('/', performanceReviewController.getPerformanceReviews);
router.post('/add', performanceReviewController.addPerformanceReview);
router.post('/assign', performanceReviewController.assignParticipants);

module.exports = router;
