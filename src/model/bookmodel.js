const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : {type : String , required: true , unique : true},
    authorName : String,
    category : {type : String , enum : ["Literacy" , "Adventure" , "Comic" , "Detective" , "Tech"]},
    year : Number
}, {timestamps: true});

const bookModel = mongoose.model('Book' , bookSchema);

module.exports.bookModel = bookModel;