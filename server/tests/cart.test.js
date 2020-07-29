const request = require('supertest')
const app = require('../app')
const { signToken } = require('../helpers/jwt')

const { clearUsers } = require('./helpers/cleartable')
const { seedUsers, seedProducts, seedCarts } = require('./helpers/seedTable')

// ***** uncomment run seed only first time run test ****** //
// beforeAll(seedUsers)
// beforeAll(seedProducts)
// beforeAll(seedCarts)


const admin = { email:'admin@user.com' }
const customer = { email:'customer@user.com' }
const tokenAdmin = signToken(admin)
const tokenCustomer = signToken(customer)

describe('Cart All Routes Test', function() {
    test('Browse products login no needed or optional', function(done) {
        request(app)
        .get('/')
        .set({token: ''})
        .end(function(err, res) {
            if(err) throw err
    
            expect(res.status).toBe(200)
            expect(res.body).toBeInstanceOf(Array)
            done()
        })
    })
    test('Read one product login no needed or optional', function(done) {
        request(app)
        .get('/product/2')
        .set({token: ''})
        .end(function(err, res) {
            if(err) throw err
    
            expect(res.status).toBe(200)
            expect(res.body).toBeInstanceOf(Object)
            expect(res.body).toHaveProperty('name', "laptop2")
            done()
        })
    })
    test('add to cart login needed', function(done) {
        request(app)
        .post('/addToCart/2')
        .set({token: tokenCustomer})
        .end(function(err, res) {
            if(err) throw err
    
            expect(res.status).toBe(201)
            expect(res.body).toBeInstanceOf(Object)
            expect(res.body).toHaveProperty('ProductId', 2)
            done()
        })
    })
    test('show cart login needed', function(done) {
        request(app)
        .get('/carts')
        .set({token: tokenCustomer})
        .end(function(err, res) {
            if(err) throw err
    
            expect(res.status).toBe(200)
            expect(res.body).toBeInstanceOf(Array)
            done()
        })
    })
    // only work first time run test because already deleted
    test.skip('delete cart login needed', function(done) {
        request(app)
        .delete('/carts/delete/3')
        .set({token: tokenCustomer})
        .end(function(err, res) {
            if(err) throw err
    
            expect(res.status).toBe(200)
            expect(res.body).toBeInstanceOf(Object)
            expect(res.body).toHaveProperty('message', "Successfully delete item in your cart")
            done()
        })
    })
})
