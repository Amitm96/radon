const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookcontroller');

router.post('/newBook' , bookController.addBook);
router.get('/allBooks' , bookController.getBookList);

module.exports = router
 