import React, { Component } from 'react'


class MoreDetails extends Component {
  
  render() {
    return (
      <div className = 'moreDetails'>
      <h1 className = 'detailsTitle'>Details on the recipe you wanted</h1>
      <div className = 'moreDetailsPicAndTitle'>
        <img className = 'moreDetailsPic' src={this.props.recipe.image} alt={`momo`}/>
        <h1 className = 'yourTitle'>Title: {this.props.recipe.label}</h1>
      </div>

      <div className = 'yeildDiv'>
        <h3 className = 'resultTitle'>Yield:</h3>
        <p className = 'yeildPara'>{this.props.recipe.yield}</p>
      </div>

      <div className = 'ingredientsDiv'>
        <h3 className = 'resultTitle'>Ingredients</h3>
        <p className = 'ingredientsPara'>{this.props.recipe.ingredients}</p>
      </div>
       
        
      <div className = 'prepDiv'>
        <h3 className = 'resultTitle'>Health Labels</h3>
        <p className = 'prepPara'>{this.props.recipe.healthLabels}</p>
      </div> 
      <Link to="/allResults">See All Results</Link>  
    </div>
    )
  }
}

export default MoreDetails;