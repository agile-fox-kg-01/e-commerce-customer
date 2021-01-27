const express = require('express')
const router = express.Router()
const { authentication } = require('../middlewares/authCustomer')
const CartController = require('../controllers/carts')
const ProductController = require('../controllers/products')


router.get('/', authentication, CartController.showCarts)

router.post('/add', authentication, CartController.add)

router.delete('/delete/:id', authentication, CartController.delete)

router.patch('/edit/:id', authentication, CartController.editQuantity)

router.delete('/checkout/', authentication, CartController.checkout)

router.post('/category', authentication, ProductController.findDataByCategory)

module.exports = router