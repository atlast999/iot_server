const User = require('../data/models/User')
const jwt = require('jsonwebtoken')
class UserController {


    login(req, res, next){
        const {username, password} = req.body
        User.findOne({username: username})
            .then(user => {
                if(!user){
                    res.json({error: 'User is not exist'})
                    return
                } 
                if(user.hashPassword === password){
                    const token = jwt.sign({username: user.username}, 'secret')
                    res.json({code : '200', token: token})
                } else {
                    res.json({error: 'Password is incorrect'})
                }
            })
            .catch(next)
    }
}

module.exports = new UserController()