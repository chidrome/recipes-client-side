import React, { Component } from 'react'
import Navbar from './Navbar';
import FooterTitle from './FooterTitle'

class MoreDetails extends Component {
  render() {
    return (
      <div className = 'moreDetails'>
      <Navbar />
      <h1 className = 'detailsTitle'>Details on the recipe you wanted</h1>
      <div className = 'moreDetailsPicAndTitle'>
        <img className = 'moreDetailsPic' src={this.props.recipeInfo} alt={`momo`}/>
        <h1>Title: {this.props.recipeInfo}</h1>
      </div>

      <div className = 'yeildDiv'>
        <h3 className = 'resultTitle'>Yeild:</h3>
        <p className = 'yeildPara'>{this.props.recipeInfo}</p>
      </div>

      <div className = 'ingredientsDiv'>
        <h3 resultTitle>Ingredients</h3>
        <p className = 'ingredientsPara'>{this.props.recipeInfo}</p>
      </div>
       
        
      <div className = 'prepDiv'>
        <h3 resultTitle>Health Labels</h3>
        <p className = 'prepPara'>{this.props.recipeInfo}</p>
      </div>   
      <FooterTitle/>
    </div>
    )
  }
}

export default MoreDetails