const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String,
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10},
    isDeleted: {type:Boolean , default:false}

}, { timestamps: true });


module.exports = mongoose.model('Book2', bookSchema) //users
