import React, {Component} from 'react';
import Modal from 'react-modal';
import './recipe-card.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth              : '600px'
  }
};

class RecipeCard extends Component{
    
    constructor(props){
        super(props);
        this.state = { modalIsOpen: false };
        
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getProcedure = this.getProcedure.bind(this);
    }
    
    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    
    getProcedure = () => {
        const list = this.props.recipe.procedure.map(step => 
                                                     <li>{step}</li>);
        return (list);
    }
    
    render(){
        return(
            <div>
                <div className="card">
                    <div className="imgContainer">
                        <img className="card-img-top img-fluid recipeImg" src={process.env.PUBLIC_URL + '/' + this.props.recipe.imageURL} alt="Card image cap"/>
                        <div className="card-body">
                            <label>{this.props.recipe.name}</label><button type="button" className="btn btn-sm viewRecipeBtn" onClick={this.openModal}>View Recipe</button>
                        </div>
                    </div>
                </div>
                
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h4>Procedure</h4>
                    <div>
                        <ul>
                            {this.getProcedure()}
                        </ul>
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={() => this.closeModal()}>Close</button>
                </Modal>
            </div>
        )
    }
}

export default RecipeCard;