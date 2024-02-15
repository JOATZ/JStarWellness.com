import React from 'react'
import Slider from 'react-slick'

import Pic from '../app/assets/img/1170x700.jpg'

const slidesData = [
    {
        id: 1,
        title: 'Slide One',
        image: Pic
    },
    {
        id: 2,
        title: 'Slide Two',
        image: Pic
    },
    {
        id: 3,
        title: 'Slide Three',
        image: Pic
    }
]

const HomeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: 'linear',
        arrows: true
    }

    return (
        <div
            className='slider-container'
            style={{ maxHeight: '500px', overflow: 'hidden' }}
        >
            <Slider {...settings}>
                {slidesData.map((slide) => (
                    <div key={slide.id}>
                        <img src={slide.image} alt={slide.title} />
                        <h2>{slide.title}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default HomeCarousel
