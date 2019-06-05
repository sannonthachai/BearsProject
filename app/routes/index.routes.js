const jwt = require("jwt-simple")
const passport = require('passport')
const { loginMiddleware } = require('../config/loginmid')
const requireJWTAuth = passport.authenticate("jwt",{session:false})

module.exports = (router) => {
    router.post('/login', loginMiddleware, (req,res) => {
        let payload = {
            sub: req.body.username,
            iat: new Date().getTime()
        }
        let SECRET = 'MY_SECRET_KEY'
        res.send(jwt.encode(payload, SECRET))
    })
    router.get('/', requireJWTAuth, (req,res) => {
        res.send('ยอดเงินคงเหลือ 50')
    })
}