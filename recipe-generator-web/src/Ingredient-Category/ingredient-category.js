import React, {Component} from 'react';
import './ingredient-category.css';
import Ingredient from '../Ingredient/ingredient';
import HttpService from '../Services/http-service';

let http = new HttpService();

class IngredientCategory extends Component {
    
    constructor(props){
        super(props);
        this.state = {ingredients:[]};
        
        //bind functions
        this.loadIngredients = this.loadIngredients.bind(this);
        this.displayIngredients = this.displayIngredients.bind(this);
        
        this.loadIngredients(this.props.label.toLowerCase());
    }
    
    loadIngredients = (label) => {
        var self = this;
        http.getIngredients(label).then(data =>{
            self.setState({ingredients:data});
        }, err => {
            console.log("error");
        });
    }
    
    displayIngredients = () => {
        const list = this.state.ingredients.map(ingredient => <Ingredient ingredient={ingredient} key={ingredient._id}/>);
        return (list);                                                                          
    }
    
    render() {
        return (
            <div className="pos-f-t">
                <nav className="navbar navbar-light bg-light">
                    <label>{this.props.label}</label>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={"#"+this.props.label.toLowerCase().replace(/\s/g, '')+"List"} aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <div className="collapse" id={this.props.label.toLowerCase().replace(/\s/g, '')+"List"}>
                    <div className="bg-light p-4">
                        <div>{this.displayIngredients()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IngredientCategory;