import React, { Component } from 'react'
import ResultCards from './ResultCards';

export default class MiniResults extends Component {
  render() {
    const FiveResults = () => {
      const recipeArray = this.props.recipes;
      for(let i = 0; i < 6; i++){
        return <ResultCards recipe={recipeArray[i]} />
      }
    }
    return (
      <div>
        {FiveResults}
      </div>
    )
  }
}
