const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require('../models/publisherModel');

const createBook= async function (req, res) {
    let bookdata = req.body
    let authid = bookdata.author
    let publishid = bookdata.publisher
    let auth = false
    let publish = false
    if(authid){
        let validateauth = await authorModel.findById(authid);
        if(!validateauth) res.send({msg : "please enter correct author id"});
        else{
            auth = true
        }
    }
    else{
        res.send({msg : "athor details is required please enter that"})
    }

    if(publishid){
        let validatepublish = await publisherModel.findById(publishid);
        if(!validatepublish) res.send({msg : "please enter correct publish id"});
        else {
            publish = true
        }
    }
    else{
        res.send({msg : "publisher details is required please enter that"})
    }

    if(publish && auth){
        newBook = await bookModel.create(bookdata);
        res.send({msg : newBook})
    }
           
}
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAllDetais = async function (req, res) {
    let bookList = await bookModel.find().populate('author').populate('publisher');
    res.send({data: bookList})

}

const updateBooksDetails = async function(req , res){
    let allBooks = await bookModel.find().populate('author').populate('publisher', null, {name : {$in: ['HarperCollins','Pengiun']}});
    allBooks.forEach(obj => {
        if(obj.publisher != null) obj.isHardCover = true
    })
    res.send({msg : "updated successfully"});
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAllDetails = getBooksWithAllDetais
module.exports.updateBooksDetails = updateBooksDetails
