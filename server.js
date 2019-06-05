const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

// Connect Database
const db = require('./app/config/key')
mongoose.connect(db.mongoURI,db.set)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

// Morgan
app.use(morgan('dev'))

// Express body-parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// Passport Middleware
const jwtAuth = require('./app/config/jwt')
passport.use(jwtAuth)

// Set Routes
const router = express.Router()
app.use('/', router)
require('./app/routes/index.routes')(router)

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server started on port ${PORT}`))
