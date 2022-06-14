
const validate = function(req , res , next){
    const isFreeAppUser = req.headers.isfreeappuser
    if(isFreeAppUser != undefined){
        if(isFreeAppUser == 'true'){
            req["isFreeAppUser"] = true
        }
        else{
            req["isFreeAppUser"] = false
        }
        next();
    }
    else{
        res.send({error : "isFreeAppUser missing in request header"})
    }
}


module.exports = {validate}