import React from 'react';
import AboutUs from './components/AboutUs';
import Carousel from './components/ImgCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel />
      <AboutUs />
    </div>
  );
}

export default App;
