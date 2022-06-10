
const dataLogged = function(req , res , next){
    let date = new Date();
    console.log(`Current timestamp is ${date}`);
    let ip = req.ip
    console.log(`The user requested from ${ip} ip address`);
    let path = req.path
    console.log(`The requested route is ${path}`);
    next()
}

module.exports = {dataLogged}
