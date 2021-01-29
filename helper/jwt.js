const jwt = require('jsonwebtoken')

function generateToken (payload) {
  const token = jwt.sign(payload, 'inirahasia')
  return token
}

function verifyToken(token) {
  const decoded = jwt.verify(token)
  return token
}

module.exports = {
  generateToken,
  verifyToken
}