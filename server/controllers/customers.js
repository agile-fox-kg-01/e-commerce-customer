const { Customer } = require('../models/index.js')
const { verifyPass } = require('../helpers/passwordHandler.js')
const { generateToken } = require('../helpers/tokenHandler')
 
class CustomerController{
  
  static async register (req,res,next) {
    const { fullname, email, password } = req.body
    
    try{
      const newCustomer = await Customer.create({
        fullname, email, password 
      })
      
      res.status(201).json({
        id: newCustomer.id,
        email: newCustomer.email
      })
    }catch(err){
      console.log(err)
      next(err)
    }
  }
  
  static async login (req,res,next) {
    const { email, password } = req.body
   
    try{
      const customerLogin = await Customer.findOne({
        where:{
          email: email
        }
      })
      
      if(!customerLogin){
        throw {
          name: 'BadRequest',
          message: 'Email not found, please register!'
        }
      } else {
        if(!verifyPass(password, customerLogin.password)){
          throw {
            name: 'BadRequest',
            message: 'Password is incorrect'
          }
        } else {
          const token = generateToken(email)
       
          res.status(200).json({
            token
          })
        }
      }
    }catch(err){
      console.log(err )
      next(err)
    }
  }
}

module.exports = CustomerController