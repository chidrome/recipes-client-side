import React, { Component } from 'react';
import ResultCards from './ResultCards';

export default class SeeAllResults extends Component {
  render() {
    const allRecipes = this.props.recipes.map((recipe, i)=> {
      return(
        <ResultCards
          key={i}
          recipe={recipe}
        />
      )
    })
    return (
      <div>
        {allRecipes}
      </div>
    )
  }
}
