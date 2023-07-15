const express = require('express');
const reviewController = require('./../controllers/reviewController');

const authController = require('./../controllers/authController');

// Merge params with dependencies
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .patch(reviewController.updateReview)
  .get(reviewController.getReview)
  .delete(reviewController.deleteReview);

module.exports = router;
