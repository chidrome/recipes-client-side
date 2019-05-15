import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
export default class ImgCarousel extends Component {
    render() {
        return (
            <div className="carousel-slider">
                <Carousel autoPlay infiniteLoop>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg" className="carousel-img" alt="" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src="https://live.staticflickr.com/3284/2536005489_426b7d2a7c_z.jpg" className="carousel-img" alt="" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src="https://libreshot.com/wp-content/uploads/2017/03/valentine-food.jpg" className="carousel-img" alt="" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
            </div>
            
        );
    }
};

