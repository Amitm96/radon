const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookcontroller');

router.post('/createBook' , bookController.addBook);
router.get('/bookList' , bookController.getBookList);
router.post('/getBooksInYear' , bookController.BooksInYear);
router.post('/ParticularBooks' , bookController.ParticularBooks);
router.get('/getXINRBooks' , bookController.getXINRBooks );
router.get('/getRandomBooks' , bookController.getRandomBooks);

module.exports = router
 