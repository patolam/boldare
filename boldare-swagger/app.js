'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
const session = require('express-session');
module.exports = app; // for testing

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.connect('mongodb://patolam:patolam90@ds163984.mlab.com:63984/productsdb');
mongoose.Promise = global.Promise;
mongoose.set('debug', true);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const auth = require('./routes/auth.route');
const migration = require('./routes/migration.route');

const profile = require('./routes/profile.route');
const user = require('./routes/user.route');

var cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/auth', auth);
app.use('/migrate', migration);

app.use('/profile', profile);
app.use('/user', user);

app.use(session({ secret: 'passport', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

const port = 10010;
app.listen(port, () => console.log('Node server running on port ' + port));

// SwaggerExpress.create(config, function (err, swaggerExpress) {
//     if (err) {
//         throw err;
//     }
//
//     // install middleware
//     swaggerExpress.register(app);
//
//     if (swaggerExpress.runner.swagger.paths['/hello']) {
//         console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
//     }
// });
