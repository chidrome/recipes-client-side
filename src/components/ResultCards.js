import React, { Component } from 'react'
import MoreDetails from './MoreDetails';

export default class ResultCards extends Component {
  render() {
    return (
      <div>
        <img src={this.props.recipe.image} alt=""/>
        <h1>{this.props.recipe.label}</h1>
        {/* Insert code for the more details link. For some reason I can't think of the logic for it this early in the morning. */}
        <a href="/moreDetails"><MoreDetails recipeInfo={this.props.recipe} /></a>
      </div>
    )
  }
}
