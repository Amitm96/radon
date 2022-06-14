const jwt = require('jsonwebtoken')
const authenticate = async function(req , res , next){
    let token = req.headers["x-Auth-token"]
    if(!token){
        token = req.headers["x-auth-token"]
    }
    if(!token) res.send({errorMessage: "token must be present in headers"})
    
    let isVerified = jwt.verify(token , "functionup-radon")
    if(isVerified){
        next()
    }
    else{
        res.send({errorMsg: "the token is invalid , please enter correct token"})
    }
    
}

module.exports = {authenticate}