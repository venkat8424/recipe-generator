import React, {Component} from 'react';
import './recipe-list.css'
import RecipeCard from '../RecipeCard/recipe-card';
import NotificationService, {NOTIF_RECIPELIST_CHANGED} from '../Services/notification-service';

let ns = new NotificationService();

class RecipeList extends Component {
    
    constructor(props){
        super(props);
        this.state = {recipeList: []};
        
        this.recipeListChanged = this.recipeListChanged.bind(this);
        this.displayRecipes = this.displayRecipes.bind(this);
    }
    
    componentDidMount() {
        ns.addObserver(NOTIF_RECIPELIST_CHANGED, this, this.recipeListChanged);
    }
    
    recipeListChanged = (newRecipeList) => {
        this.setState({recipeList: newRecipeList});
    }
    
    displayRecipes = () => {
        const list = this.state.recipeList.map(recipe => 
            <RecipeCard recipe={recipe} key={recipe._id}/>
        );
        return (list);
    }
    
    render(){
        return(
            <div>
                {this.displayRecipes()}
            </div>
        )
    }
}

export default RecipeList;