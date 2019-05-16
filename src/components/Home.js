import React, { Component } from 'react';
import Carousel from './ImgCarousel';
import Form from './Form'
import MiniResults from './MiniResults';

export default class Home extends Component {
  render() {
    return (
      <>
      <div className = 'homepageContainer'>
        <Carousel />
        <Form handleFormRecipe = {this.props.handleFormRecipe} />
        <MiniResults handleClickMoreDetails = {this.props.handleClickMoreDetails} recipe = {this.props.recipe} />
      </div>
      </>
      
    )
  }
}
