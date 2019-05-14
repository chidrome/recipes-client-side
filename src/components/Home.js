import React, { Component } from 'react';
import Carousel from './ImgCarousel';
import Navbar from './Navbar';
import FooterTitle from './FooterTitle'
import Form from './Form'

export default class Home extends Component {
  render() {
    return (
      <>
      <div className = 'homepageContainer'>
        <Navbar />
        <Carousel />
        <Form />
      </div>
     
      <FooterTitle/>
      </>
      
    )
  }
}
