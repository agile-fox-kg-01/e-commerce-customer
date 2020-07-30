'use strict';
const {
  Model
} = require('sequelize');

const { hassPass } = require('../helpers/passwordHandler.js')
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Cart)
      Customer.belongsToMany(models.Product, {
        through: models.Cart
      })
    }
  };
  Customer.init({
    fullname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Customer',
    hooks: {
      beforeCreate (customer) {
        customer.password = hassPass(customer.password)
      }
    }
  });
  return Customer;
};