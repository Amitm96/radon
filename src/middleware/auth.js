const jwt = require('jsonwebtoken')
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-Auth-token"]
    if(!token){
        token = req.headers["x-auth-token"]
    }
    if(!token) res.send({errorMessage: "token must be present in headers"})
    else{
        next();
    }
    
    
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"]
    let encodedToken = jwt.verify(token , "functionup-radon")
    let userId = req.params.userId
    if(encodedToken){
        if(encodedToken.userId === userId) next()
        else{
            res.send({errorMessage : "You are not authorized to access others profile and change anything"})
        }
    }
    else{
        res.send({errorMessage : "token not matched"})
    }
}

module.exports = {authenticate , authorise}