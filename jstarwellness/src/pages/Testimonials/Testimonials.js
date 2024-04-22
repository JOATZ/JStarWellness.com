import React from 'react'
import TESTIMONIALS from 'components/Testimonials/TESTIMONIALS'
import { Card, CardBody, CardImg, CardText, Col, Row } from 'reactstrap'

import './Testimonials.css'

const Testimonials = () => {
    return (
        <Row className='testimonial-intro'>
            <Col
                md={{ size: 8, offset: 2 }}
                xl={{ size: 4, offset: 4 }}
                className='testimonial-intro-col'
            >
                <h2>Testimonials</h2>
                <p>
                    A message saying something regarding testimonials, hear from
                    our happy customers etc...having pics wiht these would be
                    great too. I can map them in if they are already in the
                    gallery.
                </p>
            </Col>
            {TESTIMONIALS.map((testimonial) => (
                <Col
                    md={{ size: 8, offset: 2 }}
                    xl={{ size: 4, offset: 4 }}
                    key={testimonial.id}
                    className='testimonial-col'
                >
                    <Card>
                        {testimonial.src && (
                            <CardImg
                                top
                                src={testimonial.src}
                                alt={`Testimonial by ${testimonial.author}`}
                            />
                        )}
                        <CardBody>
                            <CardText>{testimonial.statement}</CardText>
                            <CardText className='text-muted'>
                                - {testimonial.author}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Testimonials
