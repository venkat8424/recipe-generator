import React, {Component} from 'react';
import './ingredient.css';

class Ingredient extends Component{
    render(){
        return(
            <div className="custom-control custom-checkbox" key={this.props.ingredient._id}>
                <input type="checkbox" className="custom-control-input ingredient" value={this.props.ingredient.name} id={this.props.ingredient.name}/>
                <label className="custom-control-label" htmlFor={this.props.ingredient.name}>{this.props.ingredient.name}</label>
            </div>
        );
    }
}

export default Ingredient;