const { User, Product } = require('../models/index.js')
const { generateToken } = require('../helpers/tokenHandler.js')


class ProductController {
  
  // login admin
  static async login(req, res, next) {

    try {
      const admin = await User.findOne({
        where: {
          email: req.body.email
        }
      })
      if (admin) {
        if (admin.password == req.body.password) {
          const token = generateToken(admin.email)
          res.status(200).json({
            access_token: token
          })
        } else {
          throw {
            name: 'BadRequest',
            errors: 'Password Incorrect'
          }
        }
      } else {
        throw {
          name: 'NotFound',
          errors: 'Not an admin, email incorrect'
        }
      }
    } catch (err) {
      
      console.log(err)
      // console.log(err);
      next(err)
    }
  }

  static async create(req, res, next) {
    const data = req.body.payload
    // console.log(data, '================jxksk========')
    try {
      const newProduct = await Product.create({
        name: data.name,
        price: data.price,
        stock: data.stock,
        image_url: data.image_url,
        UserId: req.params.id,
        category: data.category
   
      })
      // console.log(newProduct)
      res.status(201).json(newProduct)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  
  static async fetchCategories (req, res, next) {
    try {
      const categories = require('../categories.json')
      res.status(200).json(categories)
    }catch(err){
      next(err)
    }
  }

  static async findAll(req, res, next) {
 
    try {
      const products = await Product.findAll({
        where:{
          UserId: req.params.id
        }
      })
      res.status(200).json( products )
    } catch (err) {
      // console.log(err)
      next(err)
    }
  }
  
  static async findAllCustomer(req, res, next) {
 
    try {
      const products = await Product.findAll()
      res.status(200).json( products )
    } catch (err) {
      // console.log(err)
      next(err)
    }
  }
  
  static async update(req, res, next) {
    const data = req.body.payload
    const id = req.params.id
    console.log(data)
    try{
      const newProduct = await Product.update({
        name:data.name,
        price:data.price,
        stock: data.stock,
        image_url: data.image_url
      },{
        where: {
          id: id
        }
      })
      console.log(newProduct)
      res.status(201).json({
        newProduct
      })
    }catch(err) {
      console.log(err)
      next(err)
    }
  }
  static async delete(req,res,next){
    const id = req.params.index
    // console.log(id,'=======id======')
    try{
      const productDestroy = await Product.destroy({
        where:{
          id:id
        }
      })
      res.status(200).json({
        productDestroy
      })
    }catch(err){
      next(err)
    }
  }
  
  static async findDataByCategory(req,res,next){
    console.log(req.headers)
    try {
      const data = await Product.findAll({
        where:{
          category: req.body.categoryName
        }
      })
      res.status(200).json(data)
    }catch(err){
      console.log(err)
      next(err)
    }
  }
}

module.exports = ProductController