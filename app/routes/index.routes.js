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
        let token = jwt.encode(payload, SECRET)
        res.cookie('Bearer', token, { httpOnly: true, secure: true })
        res.send(token)
    })
    router.get('/', requireJWTAuth, (req,res) => {
        res.send('ยอดเงินคงเหลือ 50')
    })
}