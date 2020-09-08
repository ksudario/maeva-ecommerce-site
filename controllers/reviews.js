const Review = require('../models/review');

module.exports = {
    index,
    create,
    updateReview,
    deleteReview,
    editReview
};

async function index(req, res) {
    try {
        const reviews = await Review.find({}).sort('done');
    res.status(201).json(reviews);
    } catch (error) {
    res.status(400).json({message: "something went wrong"});
    }
}
async function create(req, res) {
   try {
       req.body.createdBy = req.params.id
    await Review.create(req.body)
    index(req, res);
} catch (error) {
    console.log(error)
    res.status(400).json({message: "something went wrong"});
    }
}

async function updateReview(req, res) {
    try {
        const review = await Review.findById(req.params.id)
    review.done = !review.done;
    await review.save();
    index(req, res);
    } catch (error) {
        res.status(400).json({message: "something went wrong"});
        }
    }
    
    async function deleteReview(req, res) {
        try {
           await Review.findByIdAndDelete(req.params.id);
            index(req, res);
        } catch (error) {
            res.status(400).json({message: "something went wrong"});
            }
        }
    async function editReview(req, res) {
        try{
            await Review.findByIdAndUpdate(req.params.id, req.body);
            index(req, res);
        } catch (error) {
            res.status(400).json({message: "something went wrong"});
            }
    }