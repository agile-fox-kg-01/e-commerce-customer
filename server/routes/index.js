const express = require('express')
const router = express.Router()
const products = require('./products.js')
const customer = require('./customer.js')
const cart = require('./carts.js')
const ProductController = require('../controllers/products.js')

router.post('/login', ProductController.login)
router.use('/products', products)
router.use('/customers', customer)
router.use('/customers/carts', cart)
module.exports = router