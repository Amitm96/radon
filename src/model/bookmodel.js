const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : {type : String , required: true , unique : true},
    prices : {indianPrice : String , europeanPrice : String},
    year : {type :Number , default : 2021},
    tags : [String],
    authorName : String,
    totalPages : Number,
    stockAvailable : Boolean
}, {timestamps: true});

const bookModel = mongoose.model('Newbook' , bookSchema);

module.exports.bookModel = bookModel;