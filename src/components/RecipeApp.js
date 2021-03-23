import React, { Component } from 'react';
import MediaCard from './News';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props){
  super(props);
  this.state = {
    recipes: [
      {
        id: 0,
        title: "Spaghetit",
        instrucciones: "Abrir la caja de pasta.",
        ingredientes: ["Pasta", "8 tazas de agua", "1 caja de spaghetti"],
        img:"espagueti.jpg"
    },
    {
        id: 1,
        title: "Milkshake",
        instrucciones: "Mezclar misteriosamente.",
        ingredientes: ["Pasta", "8 tazas de agua", "1 caja de Leche"],
        img:"milkshake.jpg"
    },
  ],
    nextRecipeId: 2,
    showForm: false      
  }

  this.handleSave = this.handleSave.bind(this);
  this.onDelete = this.onDelete.bind(this);
}

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.RecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

render() {
    const {showForm} = this.state;
    return (
      <div className="App1">
        <MediaCard onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ?
            <RecipeInput 
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}  
            /> :
            null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;