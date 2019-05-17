import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class MoreDetails extends Component {
  render() {
    let allIngredients = this.props.recipe.ingredients;
    if(this.props.recipe.ingredients) {
      allIngredients = this.props.recipe.ingredients.map((ingredient, i) => {
        return (
          <li key={i}>{ingredient}</li>
        )
      })
    }
    let allHealthLabels = this.props.recipe.healthLabels;
    if(this.props.recipe.healthLabels) {
      allHealthLabels = this.props.recipe.healthLabels.map((label, i) => {
        return (
          <li key={i}>{label}</li>
        )
      })
    }
    return (
      <div className = 'moreDetails'>
      <h1 className = 'detailsTitle'>Here are the details on {this.props.recipe.label}</h1>
      <div className = 'moreDetailsPicAndTitle'>
        <img className = 'moreDetailsPic' src={this.props.recipe.image} alt={``}/>
        <h1 className = 'yourTitle'>{this.props.recipe.label}</h1>
      </div>

      <hr></hr>
      <div className = 'yeildDiv'>
        <h3 className = 'resultTitle'>Yield:</h3>
        <p className = 'yeildPara'>{this.props.recipe.yield}</p>
      </div>

      <div className = 'ingredientsDiv'>
        <h3 className = 'resultTitle'>Ingredients</h3>
        <ul className = 'ingredientsPara'>{allIngredients}</ul>
      </div>
       
        
      <div className = 'prepDiv'>
        <h3 className = 'resultTitle'>Health Labels</h3>
        <ul className = 'prepPara'>{allHealthLabels}</ul>
      </div> 

      <div>
        <a href={this.props.recipe.url}>Prep Directions</a>
      </div>
      <div className="see-all-link">
        <Link to="/allResults">See All Results</Link>  
      </div>
      
    </div>
    )
  }
}

export default MoreDetails;