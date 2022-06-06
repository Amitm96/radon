const bookModel = require('../model/bookmodel');

const addBook = async function(req , res){
    let newData = req.body; 
    let savedBook = await bookModel.bookModel.create(newData);
    res.send({msg : savedBook});
}

const getBookList = async function(req , res){
    let BookList = await bookModel.bookModel.find();
    res.send({msg : BookList});
}

module.exports = {
    addBook : addBook,
    getBookList : getBookList
}