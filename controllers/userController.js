const { User } = require('../models')
const { comparePassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class userController {
  static register (req, res) {
    const {username, email, password} = req.body
    const newUser = {
      username,
      email,
      password
    }
    User.create(newUser)
      .then(user => {
        res.status(201).json({user: user.username})
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      })
  }
  static login (req, res) {
    const {username, password} = req.body
    const userObj = {
      username,
      password
    }
    User.findOne({
      where: {
        username: userObj.username
      }
    })
      .then(user => {
        if(!user) {
          res.status(401).json({msg: 'Login Failed'})
        } 
        else if(!comparePassword(userObj.password, user.password)){
          res.status(401).json({msg: 'Login Failed'})
        }
        else if(comparePassword(userObj.password, user.password)){
          const token = generateToken({
            id: user.id,
            email: user.email,
            username: user.username
          })
          res.status(200).json({
            access_token: token,
            username: user.username
          })
        }
      })
      .catch(err => {
        res.status(500).json({err})
      })
  }
}
module.exports = userController