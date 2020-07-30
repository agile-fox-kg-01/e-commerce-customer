const bcrypt = require('bcryptjs');

function hassPass (password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash 
}

function verifyPass (inputPass, dbPass) {
  return bcrypt.compareSync(inputPass, dbPass);
}

module.exports = {
  hassPass,
  verifyPass
}