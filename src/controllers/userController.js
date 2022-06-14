const userModel= require("../models/userModel")

const createUser = async function(req , res){
    let data= req.body
    if(req.freeAppUser === true){
        data.freeAppUser = true
    }
    else{
        data.freeAppUser = false
    }
    let savedData= await userModel.create(data)
    res.send({msg: savedData})
}

module.exports = {createUser}

