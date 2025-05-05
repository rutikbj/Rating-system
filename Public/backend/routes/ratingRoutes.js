const express = require('express');
const router = express.Router();
const { submitRating, getStoreRatings } = require('../controllers/ratingController');

router.post('/', submitRating);
router.get('/:storeId', getStoreRatings);

module.exports = router;