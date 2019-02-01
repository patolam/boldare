const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProfileSchema = new Schema({
    person: {type: Schema.Types.ObjectId, ref: 'Person'},
    stats: {type: Schema.Types.ObjectId, ref: 'Stats'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
});

// Export the model
module.exports = mongoose.model('Profile', ProfileSchema);
