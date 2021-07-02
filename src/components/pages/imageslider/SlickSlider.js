import React, { Component } from 'react';
import Slider from "react-slick";
import Slide from './Slide'
import image1 from "../../../img/slider1.png"
import image2 from "../../../img/slider2.png"
import image3 from "../../../img/slider3.png"
import image4 from "../../../img/slider4.png"

function SlickSlider() {

    const images = [
        { text: 'See the latest news and events', image: image1, link: 'latestnews' },
        { text: 'Keep track of competitions and league tables', image: image2, link: 'competitions' },
        { text: 'Check out the association officers', image: image3, link: 'officers' },
        { text: 'Use the links to get more information', image: image4, link: 'about' }
    ]


    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        pauseOnFocus: false,
        pauseOnHover: false,

    };

    return (
        <Slider {...settings}>
            {images.map((image, i) => (
                <Slide key={image + i} content={image} />
            ))}
        </Slider>
    );

}

export default SlickSlider;
