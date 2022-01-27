import React from "react";
import Slider from 'react-slick'

import './Carousel.css'

const Carousel = ({sponsors}) => {
    const settings = {
        dots: false,
        arrows: false,
        autoplay: sponsors.length > 0,
        autoplaySpeed: 5000,
        centerMode: true,
        fade: true,
        infinite: sponsors.length > 0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <Slider {...settings}>
            {
                sponsors.map((sponsor, index) => {
                    return(
                        <div key={index}>
                            <img src={sponsor.logoUrl} alt={sponsor.title}/>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default Carousel;