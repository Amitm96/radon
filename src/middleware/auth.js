const jwt = require('jsonwebtoken')
const authenticate = function (req, res, next) {
    //check the token in request header
    //validate this token
    try {
        let token = req.headers["x-Auth-token"]
        if (!token) {
            token = req.headers["x-auth-token"]
        }
        if (!token) res.status(400).send({ errorMessage: "token must be present in headers" })
        else {
            let encodedToken = jwt.verify(token, "functionup-radon")
            if (encodedToken) {
                req["encodedToken"] = encodedToken
                next();
            }
            else {
                res.status(401).send({ error: "authentication not successfull" })
            }

        }
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }

}


const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    try {
        let encodedToken = req.encodedToken
        let userId = req.params.userId
        if (encodedToken.userId === userId){
            req.userId = userId
            next()
        }
        else {
            res.status(403).send({ errorMessage: "You are not authorized to access others profile and change anything" })
        }
    }
    catch(err){
        res.status(500).send({error : err.message})
    }
    
}

module.exports = { authenticate, authorise }