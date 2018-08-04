var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipe = new Schema({
    name: String,
    ingredients: [{type: String}],
    procedure: [{type: String}],
    imgURL: String,
    nutritionFacts: String
});

module.exports = mongoose.model('Recipe', recipe);