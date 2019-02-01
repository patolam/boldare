const Profile = require('../models/profile.model');
const Comment = require('../models/comment.model');

exports.profile_load = (req, res) => {
    Profile.findOne()
        .populate({
            path: 'comments',
            options: {
                sort: 'date'
            }
        })
        .populate('person')
        .populate('stats')
        .exec((err, profile) => {
            if (err) {
                return next(err);
            }

            res.send(profile);
        });
};

exports.profile_comment = (req, res) => {
    let comment = new Comment(req.body);

    comment.save((err, comment) => {
        Comment
            .find()
            .sort('date')
            .exec((err, comments) => {
                Profile.findOne({}, (err, profile) => {
                    profile.comments = comments;
                    profile.save(() => {
                        res.send(comments);
                    });
                });
            });
    });
};
