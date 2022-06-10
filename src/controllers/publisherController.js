const publisherModel = require('../models/publisherModel');

const creatPublisher = async function(req , res){
    publisherData = req.body;
    let publisherCreate = await publisherModel.create(publisherData);
    res.send({msg : publisherCreate});
}

module.exports = {creatPublisher};