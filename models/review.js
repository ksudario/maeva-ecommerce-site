const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: String, 
    createdBy: {type:Schema.Types.ObjectId, ref:"User"},
    review: String
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
