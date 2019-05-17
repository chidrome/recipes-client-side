import React, { Component } from 'react';
import ResultCards from './ResultCards';

export default class SeeAllResults extends Component {
  render() {
      const allRecipes = this.props.recipes.map((recipe, i)=> {
        return(
          <ResultCards handleClickMoreDetails = {this.props.handleClickMoreDetails}
            key={i}
            recipe={recipe}
          />
        )
      })
      return (
        <div className = 'allResultsContainer'>
          <h1>All results</h1>
          <div className= "allResults">
          {allRecipes}
          </div>
        </div>
      )
  }
}
