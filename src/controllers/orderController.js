
const orderModel= require("../models/orderModel")
const userModel = require('../models/userModel')
const productModel = require('../models/productModel')

const createOrder= async function (req, res) {
    let data = req.body
    const userid = data.userId
    const productid = data.productId
    const findUser = await userModel.findById(userid)
    const findProduct = await productModel.findById(productid)
    let insuffBalance = false
    if(findUser && findProduct){
        if(req["isFreeAppUser"] === true){
            data["isFreeAppUser"] = true
            data["amount"] = 0
        }
        else{
            const productPrice = findProduct.price
            const userBalance = findUser.balance 
            if(userBalance < productPrice){
                insuffBalance = true
            }
            else{
                data["amount"] = productPrice
                data["isFreeAppUser"] = false
                let updateBalance = await userModel.findByIdAndUpdate({_id: userid},{$inc:{balance:-productPrice}})
            }
        }
        if(insuffBalance) res.send({errormsg : "you dont have sufficient balance to order"});
        else{
            let orderCreate = await orderModel.create(data)
            res.send({msg : orderCreate})
        }     
    }
    else{
        res.send({msg : "please enter correct userid or productid"})
    }
}

module.exports = {createOrder}
