const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const uri = 'mongodb+srv://sannonthachai:chai41742@cluster0-ne5td.mongodb.net/test?retryWrites=true';
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error: '));
db.once('open', () => {
    console.log("DB connection alive");
});

require('./app/routes/index.routes')(app);

app.listen(port);
console.log('Magic Happens on port ' + port);

