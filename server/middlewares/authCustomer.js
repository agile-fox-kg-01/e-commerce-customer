const { decodedToken } = require('../helpers/tokenHandler.js')
const { Customer } = require('../models/index.js')


async function authentication(req, res, next) {
  const token = req.headers.access_token
  console.log(req.body,'auth=====')
  if (token) {
    try {
      const payload = decodedToken(token)
      const customer = await Customer.findOne({
        where: {
          email: payload
        }
      })
      req.customer= customer
      next()
    } catch (err) {
      next(err)
    }
  }
  
}

module.exports = {
  authentication
}

