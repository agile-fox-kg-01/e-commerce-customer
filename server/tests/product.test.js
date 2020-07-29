const request = require('supertest')
const app = require('../app')
const { signToken } = require('../helpers/jwt')

const { clearUsers } = require('./helpers/cleartable')
const { seedUsers } = require('./helpers/seedTable')

beforeAll(seedUsers)
afterAll(clearUsers)

const admin = { email:'admin@user.com' }
const customer = { email:'customer@user.com' }
const tokenAdmin = signToken(admin)
const tokenCustomer = signToken(customer)

describe('Product All Routes Test', function() {
    test('Get all products data', function(done) {
        request(app)
        .get('/products')
        .set({token: tokenAdmin})
        .end(function(err, res) {
            if(err) throw err
    
            expect(res.status).toBe(200)
            expect(res.body).toBeInstanceOf(Array)
            done()
        })
    })
    test('Get all product Validation islogin', function(done) {
        request(app)
        .get('/products')
        .set({token: ''})
        .end(function(err, res) {
            if(err) throw err
    
            expect(res.status).toBe(401)
            expect(res.body).toBeInstanceOf(Object)
            expect(res.body).toHaveProperty('errors')
            done()
        })
    })
})
