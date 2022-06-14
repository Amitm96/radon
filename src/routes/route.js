const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController = require("../controllers/orderController")
const vMiddleware = require ("../middlewares/validationMiddleware")



router.post("/createProduct",  productController.createProduct )

router.post("/createUser", vMiddleware.validate , userController.createUser)

router.post("/createOrder", vMiddleware.validate , orderController.createOrder)


module.exports = router;