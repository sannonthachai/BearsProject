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

exports.getBearsId = (req,res) => {
    Bear.findById(req.params.bear_id,(err,bear) => {
        if (err)
            res.send(err);

        res.json(bear);
    });
};

exports.putBears = (req,res) => {
    Bear.findById(req.params.bear_id, function(err, bear) {

        if (err)
            res.send(err);

        bear.name = req.body.name;
        bear.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear updated!' });
        });

    });
};

exports.delBears = (req,res) => {
    Bear.remove({
        _id: req.params.bear_id
    }, function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
};