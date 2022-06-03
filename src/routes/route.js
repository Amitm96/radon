const express = require('express');
const underscore = require('underscore')

const router = express.Router();

router.get('/movies', function (req, res) {
    const movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    res.send(movieArr);
});

router.get('/movies/:indexNumber', function (req, res) {

    const movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    let indx = req.params.indexNumber;
    if(indx > movieArr.length-1){
        res.send("error use a valid index it is out of range");
    }
    else{
        res.send(movieArr[indx]);
    }
    
});

let arrObj = [ {
    "id": 1,
    "name": "The Shining"
   }, 
   {
    "id": 2,
    "name": "Incendies"
   }, 
   {
    "id": 3,
    "name": "Rang de Basanti"
   }, 
   {
    "id": 4,
    "name": "Finding Nemo"
   }]

router.get('/films', function(req, res){
       
       res.send(arrObj);
})

router.get('/films/:filmId', function(req, res){
    let fId = req.params.filmId;
    let resMsg;
    for(let obj of arrObj){
        if(obj["id"] == fId){
            resMsg = obj;
            break;
        }
        else{
            resMsg = `this film id - ${fId} is not exist please enter correct id`;
        }
    }
    res.send(resMsg);
    })


module.exports = router;
// adding this comment for no reason