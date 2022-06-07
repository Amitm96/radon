
const authorModel = require('../model/authormodel');

const creatAuthor = async function(req , res){
    let data = req.body;
    let savedAuthor = await authorModel.create(data);
    res.send({msg : savedAuthor});
}

const getAuthors = async function(req , res){
    let authorList = await authorModel.find();
    res.send({msg : authorList});
}

module.exports = {
    creatAuthor : creatAuthor,
    getAuthors : getAuthors
}