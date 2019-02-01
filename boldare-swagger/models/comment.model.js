const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
    name: {type: String, required: true, max: 100},
    surname: {type: String, required: true, max: 100},
    text: {type: String, required: true, max: 100},
    date: {type: Date, default: () => Date.now()},
});

// Export the model
module.exports = mongoose.model('Comment', CommentSchema);
