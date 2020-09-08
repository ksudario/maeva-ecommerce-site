const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const reviewCtrl = require('../../controllers/reviews');

/*---------- User Login/signup Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

//Review Routes
router.get('/', reviewCtrl.index);
router.post('/:id/reviews', reviewCtrl.create);
router.put('/:id/reviews', reviewCtrl.updateReview);
//delet /api/todo/:id
router.delete('/:id/reviews', reviewCtrl.deleteReview);
//put /api/todos/:id/edit
router.put('/:id/reviews/edit', reviewCtrl.editReview);


module.exports = router;