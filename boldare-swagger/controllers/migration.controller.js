const Auth = require('../models/auth.model');
const User = require('../models/user.model');
const Comment = require('../models/comment.model');
const Stats = require('../models/stats.model');
const Person = require('../models/person.model');
const Profile = require('../models/profile.model');

exports.migrate = async function (req, res) {

    await User.deleteMany();
    await Profile.deleteMany();
    await Person.deleteMany();
    await Stats.deleteMany();
    await Comment.deleteMany();

    await Comment.create(
        [
            {
                "name": "Andy",
                "surname": "Dwyer",
                "text": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ",
                "date": 1542464142000
            },
            {
                "name": "Leslie",
                "surname": "Knope",
                "text": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ",
                "date": 1542464142000
            },
            {
                "name": "Ann",
                "surname": "Perkins",
                "text": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ",
                "date": 1542464142000
            },
            {
                "name": "Chris",
                "surname": "Traeger",
                "text": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ",
                "date": 1542464142000
            },
            {
                "name": "Tom",
                "surname": "Haverford",
                "text": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ",
                "date": 1542464142000
            }
        ]);

    await Stats.create({
        "likes": 121,
        "following": 723,
        "followers": 4433
    });

    await Person.create({
        "name": "Ron",
        "surname": "Swanson",
        "city": "Pawnee",
        "country": "USA"
    });

    await Person.create({
        "name": "Marcin",
        "surname": "Patoła",
        "city": "Warszawa",
        "country": "Poland"
    });

    await Profile.create({
        person: await Person.findOne({'surname': 'Swanson'}),
        stats: await Stats.findOne(),
        comments: await Comment.find()
    });

    let auth = new Auth({
        email: 'marcin.patola@boldare.com'
    });

    await auth.setPassword('abcd');
    auth.save();

    await User.create({
        person: await Person.findOne({'surname': 'Patoła'}),
        "liked": true,
        "followed": false
    });

    res.sendStatus(200);

};
