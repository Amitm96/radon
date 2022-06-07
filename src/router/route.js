const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookcontroller');
const authorController = require('../controller/authorcontroller');


router.post('/createauthor' , authorController.creatAuthor);
router.get('/getauthors' , authorController.getAuthors);

router.post('/createbook' , bookController.addBook);
router.get('/getbooks' , bookController.getBookList);

router.get('/booksbycbhagat' , bookController.getbooksbycbhagat);
router.get('/authorandupdateprice' , bookController.authornameandupdateprice);
router.get('/aname50-100price' , bookController.getanameb50t100);

module.exports = router