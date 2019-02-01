const passport = require('passport');
const LocalStrategy = require('passport-local');

const Auth = require('../models/auth.model');

passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => {
    console.log('aaa');
    Auth.findOne({ email })
        .then(auth => {
            if(!auth || !auth.validatePassword(password)) {
                return done(null, false, { errors: { 'email or password': 'is invalid' } });
            }

            return done(null, auth);
        }).catch(done);
}));
