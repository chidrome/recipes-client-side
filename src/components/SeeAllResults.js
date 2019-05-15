import React, { Component } from 'react';
import ResultCards from './ResultCards';
import FooterTitle from './FooterTitle';
import Navbar from './Navbar';

export default class SeeAllResults extends Component {
  render() {
    console.log(this.props.recipes);
    if(this.props.recipes.length > 0){
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
          <Navbar />
          {allRecipes}
          <FooterTitle />
        </div>
      )
    } else {
      return (
        <div>
          <h1>Hi</h1>
        </div>
      )
    }
  }
}
