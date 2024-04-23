import React from 'react'
import CardComponent from 'components/CardComponent'
import TESTIMONIALS from 'components/Testimonials/TESTIMONIALS'
import { Col, Container, Row } from 'reactstrap'

import './Testimonials.css'

const Testimonials = () => {
    return (
        <Container className='testimonial-page-container'>
            <Col className='testimonial-intro-col'>
                <h2>Testimonials</h2>
                <p>
                    A message saying something regarding testimonials, hear from
                    our happy customers etc...having pics with these would be
                    great too. I can map them in if they are already in the
                    gallery.
                </p>
            </Col>
            <Row className='justify-content-center'>
                {TESTIMONIALS.map((testimonial) => (
                    <Col
                        md='10'
                        key={testimonial.id}
                        className='service-item-card-col' // Adjust class name as needed
                    >
                        <CardComponent
                            cardClassName='service-item-card' // Adjust class name as needed
                            footerContent={`- ${testimonial.author}`}
                            imgPosition='top' // Assuming CardComponent supports this prop for image position
                            content={<p>{testimonial.statement}</p>}
                            src={testimonial.src}
                            altText={`Testimonial by ${testimonial.author}`}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Testimonials
