const { verifyToken } = require('../helper/jwt')
const { User } = require('../models')

module.exports = {
  authentication: async(req, res, next) => {
    const {access_token} = req.headers
    try {
      if(access_token) {
        const decoded = verifyToken(access_token)
        const user = await User.findOne({
          where:{
            username: decoded.username
          }
        })
        if(user) {
          req.loggedInUser = decoded
          return next()
        } else {
          res.status(401).json({msg: `You you haven't login yet`})
        }
      }
    } catch (error) {
      next(error)
    }
  }
}