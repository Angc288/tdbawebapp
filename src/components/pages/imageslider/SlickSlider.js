import React, { Component } from 'react';
import Slider from "react-slick";
import Slide from './Slide'


function SlickSlider({ images }) {

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
