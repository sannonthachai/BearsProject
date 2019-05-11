exports.render = (req,res) => {
    res.json({ message: 'hooray! welcome to our api!' });
};

var Bear = require('../models/baer');

exports.postBears = (req,res) => {
    let bear = new Bear();
    bear.name = req.body.name;
    
    bear.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Bear created!' });
    });
};

exports.getBears = (req,res) => {
    Bear.find(function(err, bears) {
        if (err)
            res.send(err);

        res.json(bears);
    });
};