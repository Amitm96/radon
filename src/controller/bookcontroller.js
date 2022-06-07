const bookModel = require('../model/bookmodel');
const authorModel = require('../model/authormodel');
const addBook = async function(req , res){
    let newData = req.body; 
    let savedBook = await bookModel.create(newData);
    res.send({msg : savedBook});
}

const getBookList = async function(req , res){
    let BookList = await bookModel.find();
    res.send({msg : BookList});
}

const getbooksbycbhagat = async function(req , res){
    let author = await authorModel.findOne({author_name : "Chetan Bhagat"});
    let bookList = await bookModel.find({author_id : author.author_id});
    res.send({msg : bookList});
}

const authornameandupdateprice = async function(req , res){
    let book = await bookModel.findOneAndUpdate({name : "Two states"}, {$set : {price : 100}}, {new : true});
    let author = await authorModel.findOne({author_id : book.author_id});
    res.send({author_name : author.author_name , book : book});
}



const getanameb50t100 = async function(req , res){
    let booklist =  await (bookModel.find({price : {$gte : 50 , $lte : 100}}).select({author_id : 1})).map(obj =>{
        let authorname = authorModel.find({author_id : obj.author_id});
        [authorname]
    })
    
    console.log(booklist);
}




module.exports = {
    addBook : addBook,
    getBookList : getBookList,
    getbooksbycbhagat : getbooksbycbhagat,
    authornameandupdateprice : authornameandupdateprice,
    getanameb50t100 : getanameb50t100
}