const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const reviewCtrl = require('../../controllers/reviews');

/*---------- User Login/signup Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

//Review Routes
router.get('/reviewsList', reviewCtrl.index);
router.post('/:id/reviews', reviewCtrl.create);
router.put('/:id/reviews', reviewCtrl.updateReview);
router.delete('/:id/reviews', reviewCtrl.deleteReview);
router.put('/:id/reviews/edit', reviewCtrl.editReview);


module.exports = router;