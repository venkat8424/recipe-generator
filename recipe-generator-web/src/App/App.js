import React, { Component } from 'react';
import './App.css';
import IngredientCategory from '../Ingredient-Category/ingredient-category';
import RecipeList from '../RecipeList/recipe-list';
import HttpService from '../Services/http-service';
import NotificationService, {NOTIF_RECIPELIST_CHANGED} from '../Services/notification-service';

let ns = new NotificationService();
let http = new HttpService();

class App extends Component {
    
  constructor(props){
      super(props);
      
      this.getRecipesBtnClicked = this.getRecipesBtnClicked.bind(this);
  }
    
  getRecipesBtnClicked = () => {
      var data = {};
      data.ingredientsList = [];
      var ingredients = document.getElementsByClassName("ingredient");
      for(var index=0; index<ingredients.length; index++){
          if(ingredients[index].checked){
            data.ingredientsList.push(ingredients[index].value);
        }
      }
      if(data.ingredientsList.length === 0){
        alert("Please select ingredients");
        return;
      }
      
      http.getRecipes(data).then(recipes => {
          ns.postNotification(NOTIF_RECIPELIST_CHANGED, recipes);
      }, err => {
          console.log("error");
      });
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <h1 className="display-4">Find Your Recipe</h1>
        </div>
        
        <div className="row">
            <div className="col-md-12 col-lg-4">
                <IngredientCategory label="Dairy"/>
                <IngredientCategory label="Meat"/>
                <IngredientCategory label="Vegetables"/>
                <IngredientCategory label="Fruits"/>
                <IngredientCategory label="Fish"/>
                <IngredientCategory label="Seafood"/>
                <IngredientCategory label="Spices"/>
                <IngredientCategory label="Condiments"/>
                <IngredientCategory label="Nuts"/>
                <IngredientCategory label="Sweeteners"/>
                <IngredientCategory label="Baking and Grains"/>
                <div className="getRecipeBtnWrapper">
                    <button type="button" className="btn btn-lg getRecipeBtn" onClick={() => this.getRecipesBtnClicked()}>Get Recipes</button>
                </div>
            </div>
            <div id="recipesCol" className="col-md-12 col-lg-8">
                <h2 className="display-4 recipesHeader">Your Recipes</h2>
                <RecipeList />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
