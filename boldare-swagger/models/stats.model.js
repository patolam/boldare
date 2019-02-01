const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StatsSchema = new Schema({
    likes: {type: Number, required: true, default: 0},
    following: {type: Number, required: true, default: 0},
    followers: {type: Number, required: true, default: 0},
});

// Export the model
module.exports = mongoose.model('Stats', StatsSchema);
