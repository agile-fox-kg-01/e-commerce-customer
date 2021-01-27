const { Product, Cart } = require('../models/index')
const {sequelize} = require('../models/index.js')
const { Op } = require("sequelize");

class CartController {
  
  static async showCarts(req, res, next) {
    const id = req.customer.id
    
    try {
      const carts = await Cart.findAll({
        attributes: ["id","CustomerId", "ProductId", "quantity","price"],
        where: {
          CustomerId: id
        },
        include: Product
      })
      // console.log(carts)
      res.status(200).json(carts)
      
    } catch(err) {
      console.log(err)
      next(err)
    }
  }
  
 static async add(req, res, next) {
    try {
      const { productId, quantity, price } = req.body
      const product = await Product.findOne({
        where:{
          id: productId
        }
      })
      if(product){
        if(product.stock >= quantity){
          const findOnCart = await Cart.findOne({
            where:{
              ProductId: productId,
              CustomerId: req.customer.id
            }
          })
          // console.log(findOnCart,'=========')
          if(findOnCart){
            const cart = await Cart.update({
              quantity: quantity
            },{
              where:{
                ProductId: productId,
                CustomerId: req.customer.id
              }
            })
            res.status(201).json({
              findOnCart
            })
          }else{
            const cart = await Cart.create({
              ProductId: productId,
              quantity: quantity,
              price: price,
              CustomerId: req.customer.id
            })
            res.status(201).json(cart)
          }
        } else{
          throw {
            name: 'OutOfStock',
            message: `Sorry, the stock for ${product.name} remain ${product.stock}`
          }
        }
      }else{
        throw {
          name: 'NotFound',
          errors: 'Product Not Found'
        }
      }
    }catch(err){
      console.log(err)
      next(err)
    }
 }
 
 static async delete (req, res, next){

  try{
    const id = req.params.id
    const destroy = await Cart.destroy({
      where:{
        id: id,
        CustomerId: req.customer.id
      }
    })
    res.status(200).json({
      destroy
    })
  }catch(err){
    next(err)
  }
 }
 
 static async editQuantity (req, res, next){

  try{
    const id = req.params.id
    const editQuantity = await Cart.update({
      quantity: req.body.product.quantity,
      price: req.body.product.Product.price * req.body.product.quantity
    },{
      where:{
        id: id,
        CustomerId: req.customer.id
      }
    })
    console.log(req.customer.id)
    res.status(200).json({
      editQuantity
    })
  }catch(err){
    console.log(err)
    next(err)
  }
 }
 
 static async checkout (req, res, next){
   
  try{
    const result = await sequelize.transaction(async (t) => {
      const cart = await Cart.findAll({
        where:{
          CustomerId: req.customer.id
        }
      },{
        transaction: t
      })
      for(let i=0; i<cart.length; i++){
        let currentCart = await Product.findOne({
          where:{
            id: cart[i].ProductId,
            stock: {
              [Op.gt]: cart[i].quantity
            }
          }
        },{
          transaction: t
        })
        // console.log(currentCart,'====currentCart=====')
        let checkCurrentCart = await Product.findOne({
          where:{
            id: cart[i].ProductId
          }
        },{
          transaction: t
        })
        if(checkCurrentCart.stock < cart[i].quantity){
          throw {
            name: 'OutOfStock',
            message: `Not enough stock for ${checkCurrentCart.name}`
          }
        }
        if(checkCurrentCart.stock === cart[i].quantity){
          await Product.destroy({
            where:{
              id: checkCurrentCart.id
            }
          },{
            transaction: t
          })
        } else {
          await Product.update({
            stock: checkCurrentCart.stock - cart[i].quantity
          },{
            where:{
              id: cart[i].ProductId
            },
            transaction: t
          })
        }
      }
      await Cart.destroy({
        where: {
          CustomerId: req.customer.id
        }
      },{
        transaction: t
      })
    })
    res.status(200).json({
      message: 'Checkout success'
    })
  }catch(err){
    // console.log(err, '=================')
    next(err)
  }
 }
  
}

module.exports = CartController