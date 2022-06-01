const express = require('express');
const logmod = require('./log');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-log' , function(req , res){
    logmod.logfunc();
    res.send(`the endpoint url is ${logmod.endpointurl}`);
})

module.exports = router;
// adding this comment for no reason