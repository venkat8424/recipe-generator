var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/recipe-generator');
var Ingredient = require('./model/ingredient');
var Recipe = require('./model/recipe');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, function(){
    console.log("Recipe generator API running on port 3000");
});

app.get('/recipe-generator/ingredients/:category', function(request, response){
    Ingredient.find({category: request.params.category}, function(err,ingredients){
        if(err){
            response.status(500).send({error: "Could not find ingredients"});
        }else{
            response.send(ingredients);
        }
    });
});

app.post('/recipe-generator/get-recipe', function(request, response){
    Recipe.find({ingredients:{$not:{$elemMatch:{$nin:request.body.ingredientsList}}}}, function(err, recipes){
        if(err){
            response.status(500).send({error: "Could not find recipes"});
        }else{
            response.send(recipes);
        }
    });
});