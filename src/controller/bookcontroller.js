const bookModel = require('../model/bookmodel');

const addBook = async function(req , res){
    let newData = req.body; 
    let savedBook = await bookModel.bookModel.create(newData);
    res.send({msg : savedBook});
}

const getBookList = async function(req , res){
    let BookList = await bookModel.bookModel.find().select({bookName : 1 , authorName : 1 , _id : 0});
    res.send({msg : BookList});
}

const BooksInYear = async function(req , res){
    let year = req.body.year;
    let bookListByYear = await bookModel.bookModel.find({year : year});
    res.send({msg : bookListByYear});
}

const ParticularBooks = async function(req , res){
    let bodyParams = req.body;
    let bookList = await bookModel.bookModel.find(bodyParams);
    res.send({msg : bookList});
}

const getXINRBooks = async function(req , res){
    let bookList = await bookModel.bookModel.find({'prices.indianPrice' : {$in : ["100INR" , "200INR" , "500INR"]}});
    res.send({msg : bookList});
}

const getRandomBooks = async function(req , res){
    let bookList = await bookModel.bookModel.find({$or : [{stockAvailable : true}, {totalPages : {$gt : 500}}]});
    res.send({msg : bookList});
}

module.exports = {
    addBook : addBook,
    getBookList : getBookList,
    BooksInYear : BooksInYear,
    ParticularBooks : ParticularBooks,
    getXINRBooks : getXINRBooks,
    getRandomBooks : getRandomBooks
}