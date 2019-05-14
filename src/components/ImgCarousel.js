import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
export default class ImgCarousel extends Component {
    render() {
        return (
            <div className="carousel-slider">
                <Carousel autoPlay>
                    <div>
                        <img src="https://placekitten.com/200/300" className="carousel-img" alt="" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src="https://placekitten.com/g/200/300" className="carousel-img" alt="" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src="https://placekitten.com/200/300" className="carousel-img" alt="" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
            </div>
            
        );
    }
};

