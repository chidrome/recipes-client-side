import React, { Component } from 'react';
import Carousel from './ImgCarousel';
import Form from './Form'
import MiniResults from './MiniResults';
// import HeaderTitle from './HeaderTitle';

export default class Home extends Component {
  render() {
    let introPrompt;
    if(this.props.recipe) {
      introPrompt = this.props.recipe.length === 0? (
      <div>
      <p>Are you ready to take your diet to next level?<br />
      Search the food you like and let us worry about getting the details about the food for you.<br />
      You care about your health, and so do we.<br />
      Your healthy diet is just one click away from you.</p>
      </div>
      ) :''
    }
    
    return (
      <>
      <div className = 'homepageContainer'>
        <Carousel />
        <Form handleFormRecipe = {this.props.handleFormRecipe} />
        <MiniResults handleClickMoreDetails = {this.props.handleClickMoreDetails} recipe = {this.props.recipe} />
      </div>
      {introPrompt}
      </>
    )
  }
}
