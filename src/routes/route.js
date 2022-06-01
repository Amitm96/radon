const express = require('express');
const logger = require('../logger/logger');
const util = require('../util/helper');
const validator = require('../validator/formatter');

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

module.exports = router;
// adding this comment for no reason