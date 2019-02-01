const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    liked: {type: Boolean, default: false},
    followed: {type: Boolean, default: false},
    person: {type: Schema.Types.ObjectId, ref: 'Person'},
});

// Export the model
module.exports = mongoose.model('User', UserSchema);
