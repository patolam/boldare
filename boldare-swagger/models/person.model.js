const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PersonSchema = new Schema({
    name: {type: String, required: true, max: 100},
    surname: {type: String, required: true, max: 100},
    city: {type: String, required: true, max: 100},
    country: {type: String, required: true, max: 100},
    profile: {type: Schema.Types.ObjectId, ref: 'Profile'},
});

// Export the model
module.exports = mongoose.model('Person', PersonSchema);
