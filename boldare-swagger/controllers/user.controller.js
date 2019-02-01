require('../config/passport.config');

const User = require('../models/user.model');

exports.user_load = function (req, res) {
    User.findOne()
        .populate('person')
        .exec((err, user) => {
            res.send(user);
        });
};

exports.user_like = function (req, res) {
    User.findOne({}, (err, user) => {
        user.liked = JSON.parse(req.headers['like']);
        user.save((err, user) => {
            res.send(user);
        });
    });
};

exports.user_follow = function (req, res) {
    User.findOne({}, (err, user) => {
        user.followed = JSON.parse(req.headers['follow']);
        user.save((err, user) => {
            res.send(user);
        });
    });
};
