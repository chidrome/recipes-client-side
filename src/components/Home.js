import React, { Component } from 'react';
import Carousel from './ImgCarousel';
import Form from './Form'
import MiniResults from './MiniResults';
// import HeaderTitle from './HeaderTitle';

export default class Home extends Component {
  render() {
    return (
      <>
      <div className = 'homepageContainer'>
        <Carousel />
        <Form handleFormRecipe = {this.props.handleFormRecipe} />
        <MiniResults handleClickMoreDetails = {this.props.handleClickMoreDetails} recipe = {this.props.recipe} />
        {this.props.recipe.length === 0? (
        <div>
        <p>Are you ready to take your diet to next level?</p>
        <p>Search the food you like and let us worry about getting the details about the food for you.</p>
        <p>You care about your health, and so do we.</p>
        <p>Your healthy diet is just one click away from you.</p>
        </div>
        ) :''
        }
      </div>
      </>
      
    )
  }
}
