import React, { useCallback, useState } from 'react'
import Pic from 'app/assets/img/1170x700.jpg'
import {
    Carousel,
    CarouselCaption,
    CarouselControl,
    CarouselIndicators,
    CarouselItem
} from 'reactstrap'

import 'components/HomePage/HomeCarousel.css'

const items = [
    {
        src: Pic,
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1
    },
    {
        src: Pic,
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2
    },
    {
        src: Pic,
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3
    }
]

const HomeCarousel = (args) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    const next = useCallback(() => {
        if (animating) return
        setActiveIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        )
    }, [animating])

    const previous = useCallback(() => {
        if (animating) return
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        )
    }, [animating])

    const goToIndex = useCallback(
        (newIndex) => {
            if (animating) return
            setActiveIndex(newIndex)
        },
        [animating]
    )

    const slides = items.map((item) => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.key}
        >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption
                captionText={item.caption}
                captionHeader={item.caption}
            />
        </CarouselItem>
    ))

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction='prev'
                directionText='Previous'
                onClickHandler={previous}
            />
            <CarouselControl
                direction='next'
                directionText='Next'
                onClickHandler={next}
            />
        </Carousel>
    )
}

export default HomeCarousel
