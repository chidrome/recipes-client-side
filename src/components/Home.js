import React, { Component } from 'react';
import Carousel from './ImgCarousel';
import Navbar from './Navbar';
import FooterTitle from './FooterTitle'
import Form from './Form'
// import SeeAllResults from './SeeAllResults';
import MiniResults from './MiniResults';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: []
    };
  }

  handleFormRecipe = (results) => {
    console.log(results);
    this.setState({ 
      recipe: results
     })
  }



  render() {
    return (
      <>
      <div className = 'homepageContainer'>
        <Navbar />
        <Carousel />
        <Form handleFormRecipe = {this.handleFormRecipe} />
        {/* <SeeAllResults recipes = {this.state.recipe}/> */}
        <MiniResults recipe = {this.state.recipe}/>
      </div>
     
      <FooterTitle/>
      </>
      
    )
  }
}
