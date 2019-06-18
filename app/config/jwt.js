const JwtStrategy = require("passport-jwt").Strategy //ใช้ในการ decode jwt ออกมา
const ExtractJwt = require("passport-jwt").ExtractJwt
const SECRET = 'MY_SECRET_KEY'

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET, //SECRETเดียวกับตอนencodeในกรณีนี้คือ MY_SECRET_KEY
 }

const jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
         if(payload.sub === 'chaiza') {
             return done(null, true)
         }
         return done(null,false)
})

module.exports = jwtAuth
 
