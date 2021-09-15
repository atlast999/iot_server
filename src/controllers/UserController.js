const User = require('../data/models/User')
const jwt = require('jsonwebtoken')
class UserController {


    login(req, res, next){
        const {username, hashPassword} = req.body
        User.findOne({username: username})
            .then(user => {
                if(!user){
                    res.json({code: '404', message: 'User is not exist'})
                    return
                } 
                if(user.hashPassword === hashPassword){
                    const token = jwt.sign({username: user.username}, 'secret')
                    res.json({code : '200', token: token})
                } else {
                    res.json({code: '400', message: 'Password is incorrect'})
                }
            })
            .catch(next)
    }
}

module.exports = new UserController()