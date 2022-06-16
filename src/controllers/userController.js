const e = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try {
    let data = req.body;
    if (Object.keys(data).length != 0 && data.mobile != undefined) {
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData });
    }
    else res.status(400).send({ error: "bad request, provide details correctly" })
  }
  catch (err) {
    res.status(500).send({ errorMessage: err.message })
  }
}


const loginUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0 && data.emailId != undefined && data.password != undefined) {
      let user = await userModel.findOne({ emailId: data.emailId, password: data.password });
      if (!user) return res.status(400).send({ error: "credintial Not Matched" })
      else {
        let token = jwt.sign(
          {
            userId: user._id.toString(),
            batch: "radon",
            organisation: "FUnctionUp",
          },
          "functionup-radon"
        );
        res.setHeader("x-auth-token", token);
        res.status(200).send({ token: token });
      }
    }
    else {
      res.status(400).send({ error: "please give details correctly or fill the details" })
    }
  }
  catch (err) {
    res.status(500).send({ serverError: err.message })
  }

};

const getUserData = async function (req, res) {
  try {
    let userId = req.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      return res.status(404).send({ error: "No such user exists" });
    }
    else {
      res.status(200).send({ data: userDetails });
    }
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }

};

const updateUser = async function (req, res) {
  try {
    let userId = req.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(404).send({ errorMessage: "No such user exists" });
    }
    else {
      let userData = req.body;
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
      res.status(200).send({ data: updatedUser });
    }
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }

};

const deletUser = async function (req, res) {
  try {
    let userId = req.userId;
    let user = await userModel.findById(userId);
    if (!user) res.status(404).send({ errorMsg: "No such user exist" })
    else {
      let deletedUser = await userModel.findByIdAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true })
      res.status(200).send({ user: deletedUser, msg: "deleted successfully" })
    }
  }
  catch(err){
    res.status(500).send({error : err.message})
  }
  

}



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deletUser = deletUser;
