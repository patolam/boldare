require('../config/passport.config');
const passport = require('passport');

const Auth = require('../models/auth.model');

exports.auth_save = function (req, res) {
    const credentials = req.body;

    if (!credentials.email) {
        return res.status(422).json({
            errors: {
                email: 'is required'
            }
        })
    } else if (!credentials.password) {
        return res.status(422).json({
            errors: {
                password: 'is required'
            }
        })
    }

    const auth = new Auth(req.body);

    auth.setPassword(credentials.password);

    auth.save((err, auth) => {
        res.send(auth.toAuthJSON());
    });
};

exports.auth_login = function (req, res) {
    const auth = req.body;

    if (!auth.email) {
        return res.status(422).json({
            errors: {
                email: 'is required'
            }
        })
    } else if (!auth.password) {
        return res.status(422).json({
            errors: {
                password: 'is required'
            }
        })
    }

    passport.authenticate('local', {session: false}, (err, passportAuth, info) => {
        if (err) {
            return err;
        }

        if (passportAuth) {
            const user = passportAuth;
            user.token = passportAuth.generateJWT();

            return res.json(passportAuth.toAuthJSON());
        }

        return res.send(401);
    })(req, res);
};
