module.exports = (app) => {
    let index = require('../controllers/index.controllers');
    app.get('/',index.render);
    app.post('/baers',index.postBears);
    app.get('/bears',index.getBears);
};