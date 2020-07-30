const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/products.js')
const {authentication} = require('../middlewares/authAdmin.js')

router.get('/categories', ProductController.fetchCategories)
router.post('/', authentication, ProductController.create)
// for admin
router.get('/', authentication, ProductController.findAll)
// for customer
router.get('/customers', ProductController.findAllCustomer)
router.put('/:id', authentication, ProductController.update)
router.delete('/:index', authentication, ProductController.delete)


module.exports = router