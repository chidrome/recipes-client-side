import React, { Component } from 'react';
import Carousel from './ImgCarousel';
import Navbar from './Navbar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
      </div>
    )
  }
}
