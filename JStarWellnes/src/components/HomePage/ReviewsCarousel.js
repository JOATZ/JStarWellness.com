import React, { useState } from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Carousel,
    CarouselItem,
    Col,
    Row
} from 'reactstrap'

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

const ReviewsCarousel = (args) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const chunk = (arr, size) =>
        arr.length > size
            ? [arr.slice(0, size), ...chunk(arr.slice(size), size)]
            : [arr]

    const getItemsPerSlide = () => {
        const width = window.innerWidth
        if (width >= 992) return 4
        if (width >= 768) return 3
        return 2
    }

    const slides = chunk(items, getItemsPerSlide()).map((slideItems, index) => (
        <CarouselItem key={index}>
            <Row noGutters className='reviews-carousel-row'>
                {slideItems.map((item, itemIndex) => (
                    <Col key={itemIndex} xs='6' md='4' lg='3'>
                        <Card className='review-card'>
                            <CardBody>
                                <div className='review-content'>
                                    {item.review}
                                </div>
                            </CardBody>
                            <CardFooter className='review-author'>
                                -{item.author}
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CarouselItem>
    ))

    const next = () => {
        const nextIndex =
            activeIndex === slides.length - 1 ? 0 : activeIndex + 1
        setActiveIndex(nextIndex)
    }

    const previous = () => {
        const nextIndex =
            activeIndex === 0 ? slides.length - 1 : activeIndex - 1
        setActiveIndex(nextIndex)
    }

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={3000}
            pause='hover'
            {...args}
        >
            {slides}
        </Carousel>
    )
}

export default ReviewsCarousel
