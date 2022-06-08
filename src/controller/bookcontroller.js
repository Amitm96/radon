const bookModel = require('../model/bookmodel');
const authorModel = require('../model/authormodel');
const addBook = async function(req , res){
    let newData = req.body; 
    let authorid = newData.author_id;
    if(!authorid){
        res.send({msg : "please enter authorid otherwise data can not be saved"})
    }
    else{
        let savedBook = await bookModel.create(newData);
        res.send({msg : savedBook});
    }
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
    let booklist =  await bookModel.find({price : {$gte : 50 , $lte : 100}}).select({author_id : 1 , _id :0});
    let authlist = booklist.map(obj => obj.author_id)
    let authname = await authorModel.find({author_id : {$in : authlist}}).select({author_name:1,_id:0});

    res.send({authorsname : authname});
}

const booksbyauthorid = async function(req , res){
    let authId = req.params.authid;
    let booksName = await bookModel.find({author_id : authId}).select({name : 1 , _id : 0});
    if(booksName.length > 0) res.send({booksname : booksName});
    else{
        res.send({msg : "no books present with this authorid"});
    } 
}

const authorabove50 = async function(req , res){
    let authors = await authorModel.find({age : {$gt : 50}}).select({ author_id : 1 , _id : 0});
    let authid = authors.map(obj => obj.author_id);
    let books = await bookModel.find({author_id : {$in : authid}, ratings: {$gt : 4}}).select({ author_id : 1 , _id : 0});
    let filauthid = books.map(obj => obj.author_id).filter((e , i , arr)=>{
        return arr.indexOf(e) == i;
    })
    resauth = await authorModel.find({author_id : {$in : filauthid}}).select({author_name:1,age:1,_id:0});
    res.send({res : resauth});
}

module.exports = {
    addBook : addBook,
    getBookList : getBookList,
    getbooksbycbhagat : getbooksbycbhagat,
    authornameandupdateprice : authornameandupdateprice,
    getanameb50t100 : getanameb50t100,
    booksbyauthorid ,
    authorabove50
}