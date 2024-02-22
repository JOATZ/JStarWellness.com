import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import Pic from '../app/assets/img/1170x700.jpg'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const slidesData = [
    {
        id: 1,
        title: 'Slide Title of Service',
        description: 'Slide Description of Service',
        image: Pic
    },
    {
        id: 2,
        title: 'Slide Two',
        description: 'Slide Description of Service',
        image: Pic
    },
    {
        id: 3,
        title: 'Slide Three',
        description: 'Slide Description of Service',
        image: Pic
    }
]

const HomeCarousel = () => {
    const settings = {
        autoPlay: true,
        emulateTouch: true,
        infiniteLoop: true,
        interval: 5000,
        showArrows: true,
        showThumbs: false,
        showIndicators: true,
        showStatus: false
    }

    return (
        <Carousel {...settings}>
            {slidesData.map((slide) => (
                <div key={slide.id} className='slide-container'>
                    <img src={slide.image} alt={slide.title} />
                    <div className='slide-info'>
                        <h1 className='slide-title'>{slide.title}</h1>
                        <h4 className='slide-descrih4tion'>
                            {slide.description}
                        </h4>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default HomeCarousel
