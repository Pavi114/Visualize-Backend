var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, unique: true},
    salt: String,
    hash: String,
    name: String
});

module.exports = mongoose.model('User', userSchema);