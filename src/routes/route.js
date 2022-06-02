const express = require('express');
const logger = require('../logger/logger');
const util = require('../util/helper');
const validator = require('../validator/formatter');
const lodash = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.welcome();
    util.printDate();
    util.printMonth();
    util.getBatchInfo();
    const str = "   Hello This Is A String";
    validator.trim(str);
    validator.changeToLowerCase(str);
    validator.changeToUpperCase(str);
    res.send('My first ever api!')
});

router.get('/hello' , function(req , res){
    const monthArray = ['January', 'February','March','April','May','June','July','Auguest','September','October','November','December'];
    console.log(lodash.chunk(monthArray , 3));
    const oddArray = [1,3,5,7,9,11,13,15,17,19];
    console.log(lodash.tail(oddArray));
    const arr1 = [1 , 3];
    const arr2 = [2 , 3];
    const arr3 = [4 , 5];
    const arr4 = [5 , 1];
    const arr5 = [6 , 2];
    const resArr = lodash.union(arr1 , arr2 , arr3 , arr4 , arr5);
    console.log(resArr);
    const pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    const obj = lodash.fromPairs(pairs);
    console.log(obj);
    res.send('i am in hello api');
})

module.exports = router;
// adding this comment for no reason