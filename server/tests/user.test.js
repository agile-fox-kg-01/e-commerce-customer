const request = require('supertest')
const app = require('../app')

const { clearUsers } = require('./helpers/cleartable')
const { seedUsers } = require('./helpers/seedTable')

beforeAll(seedUsers)
afterAll(clearUsers)

describe('User All Routes Test', function() {
    test('create new user', function(done) {
        request(app)
        .post('/register')
        .send({email: 'sandi@user.com', password: 'password', role: 'admin'})
        .end(function(err, res) {
            if(err) throw err

            expect(res.status).toBe(201)
            expect(res.body).toBeInstanceOf(Object)
            expect(res.body).toHaveProperty('token')
            done()
        })
    })
    test('create validation error', function(done) {
        request(app)
        .post('/register')
        .send({email: '', password: '', role: ''})
        .end(function(err, res) {
            if(err) throw err
            
            expect(res.status).toBe(400)
            expect(res.body).toBeInstanceOf(Object)
            expect(res.body).toHaveProperty('errors')
            done()
        })
    })
    test('Login to app', function(done) {
        request(app)
        .post('/login')
        .send({email: 'admin@user.com', password: 'password'})
        .end(function(err, res) {
            if(err) throw err
    
            expect(res.status).toBe(200)
            expect(res.body).toBeInstanceOf(Object)
            expect(res.body).toHaveProperty('token')
    
            done()
        })
    })
})
