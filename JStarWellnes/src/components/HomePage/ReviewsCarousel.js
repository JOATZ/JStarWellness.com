import React, { useEffect, useState } from 'react'
import CardComponent from 'components/CardComponent'
import { Carousel, CarouselItem, Col, Row } from 'reactstrap'

import 'components/HomePage/ReviewsCarousel.css'

const items = [
    {
        review: 'Found a healthy balance of foods and nutrients.',
        author: 'Kelly'
    },
    {
        review: "Developed a plan that's pretty much dummy proof.",
        author: 'Glenn'
    },
    {
        review: 'At 40, wearing a size 28 in Levis.',
        author: 'Regina'
    },
    {
        review: 'Tailored a plan simple for us and our kids.',
        author: 'Whitney & Joe'
    },
    {
        review: 'Gained a nutrition and lifestyle change indefinitely.',
        author: 'Shelly'
    },
    {
        review: 'Seen results in as fast as a week.',
        author: 'Aldo'
    },
    {
        review: 'She completely transformed my physique.',
        author: 'Kayla'
    },
    {
        review: 'Went from 155-138 in 14-12 weeks.',
        author: 'Kim'
    },
    {
        review: 'Eating healthy and staying committed to the gym.',
        author: 'Maria & Rico'
    },
    {
        review: 'Succeeding for the first time in my life.',
        author: 'Gina'
    }
]

const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width
}

const ReviewsCarousel = (args) => {
    const width = useWindowSize()
    const [activeIndex, setActiveIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const chunk = (arr, size) => {
        let result = []
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size))
        }
        return result
    }

    const getItemsPerSlide = () => {
        if (width >= 992) return 4
        if (width >= 768) return 3
        return 2
    }

    const slides = chunk(items, getItemsPerSlide()).map((slideItems, index) => (
        <CarouselItem key={index}>
            <Row noGutters className='reviews-carousel-row'>
                {slideItems.map((item, itemIndex) => (
                    <Col key={itemIndex} xs='6' md='4' lg='3'>
                        <CardComponent
                            cardClassName='review-card'
                            content={item.review}
                            footerContent={`- ${item.author}`}
                            altText={`review card by ${item.author}`}
                        />
                    </Col>
                ))}
            </Row>
        </CarouselItem>
    ))

    const next = () => {
        if (!isTransitioning) {
            const nextIndex =
                activeIndex === slides.length - 1 ? 0 : activeIndex + 1
            setActiveIndex(nextIndex)
        }
    }

    const previous = () => {
        if (!isTransitioning) {
            const nextIndex =
                activeIndex === 0 ? slides.length - 1 : activeIndex - 1
            setActiveIndex(nextIndex)
        }
    }

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={3000}
            pause='hover'
            onExiting={() => setIsTransitioning(true)}
            onExited={() => setIsTransitioning(false)}
            {...args}
        >
            {slides}
        </Carousel>
    )
}

export default ReviewsCarousel
