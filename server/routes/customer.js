const express = require('express')
const router = express.Router()
const CustomerController = require('../controllers/customers')


router.post('/register', CustomerController.register)
router.post('/login', CustomerController.login)

module.exports = router