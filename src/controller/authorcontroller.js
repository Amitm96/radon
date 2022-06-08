
const authorModel = require('../model/authormodel');

const creatAuthor = async function(req , res){
    let newData = req.body; 
    let authorid = newData.author_id;
    if(!authorid){
        res.send({msg : "please enter authorid otherwise data can not be saved"})
    }
    else{
        let savedBook = await authorModel.create(newData);
        res.send({msg : savedBook});
    }
}

const getAuthors = async function(req , res){
    let authorList = await authorModel.find();
    res.send({msg : authorList});
}

module.exports = {
    creatAuthor : creatAuthor,
    getAuthors : getAuthors
}