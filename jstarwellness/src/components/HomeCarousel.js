import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import Pic from '../app/assets/img/1170x700.jpg'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const slidesData = [
    {
        id: 1,
        title: 'Slide Title of Service 1',
        description: 'Slide Description of Service',
        image: Pic
    },
    {
        id: 2,
        title: 'Slide Title of Service 2',
        description: 'Slide Description of Service 2',
        image: Pic
    },
    {
        id: 3,
        title: 'Slide Three',
        description: 'Slide Description of Service 3',
        image: Pic
    }
]

const HomeCarousel = () => {
    const settings = {
        autoPlay: true,
        infiniteLoop: true,
        interval: 4500,
        showArrows: true,
        showThumbs: false,
        showIndicators: true,
        showStatus: false,
        transitionTime: 1500,
        animationHandler: 'fade',
        stopOnHover: false
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
