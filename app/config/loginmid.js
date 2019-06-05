module.exports = {
    loginMiddleware: (req,res,next) => {
        if(req.body.username === 'chaiza' &&
           req.body.password === 'chai41742'){
               return next()
           }
        res.send('Wrong username or password')
    }
}