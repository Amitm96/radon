const express = require('express');
const router = express.Router();

let playerobj = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
];

router.post('/players' , function(req , res){
    let obj = req.body.inputObj;
    let name = obj.name;
    let resS = true;
    for(let pobj of playerobj){
        if(pobj.name === name){
            resS = false;
            break;
        }
        else{
            resS = true;
        }
    }
    if(resS){
        playerobj.push(obj);
    }
    res.send({data : playerobj , responce: resS});
})

module.exports = router;