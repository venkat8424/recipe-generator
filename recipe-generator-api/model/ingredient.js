var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredient = new Schema({
    name: String,
    category: String
});

module.exports = mongoose.model('Ingredient', ingredient);