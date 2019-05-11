module.exports = (router) => {
    let index = require('../controllers/index.controllers');
    router.get('/',index.render);
    router.route('/bears')
        .post(index.postBears)
        .get(index.getBears);
    router.route('/bears/:bear_id')
        .get(index.getBearsId)
        .put(index.putBears)
        .delete(index.delBears);
};