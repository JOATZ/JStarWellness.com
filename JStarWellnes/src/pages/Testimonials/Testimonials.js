import React from 'react'
import TESTIMONIALS from 'components/Testimonials/TESTIMONIALS'
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    Col,
    Container,
    Row
} from 'reactstrap'

import './Testimonials.css'

const Testimonials = () => {
    return (
        <Container className='testimonial-intro'>
            <Col className='testimonial-intro-col'>
                <h2>Testimonials</h2>
                <p>
                    A message saying something regarding testimonials, hear from
                    our happy customers etc...having pics wiht these would be
                    great too. I can map them in if they are already in the
                    gallery.
                </p>
            </Col>
            {TESTIMONIALS.map((testimonial) => (
                <Row key={testimonial.id} className='testimonial'>
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
                </Row>
            ))}
        </Container>
    )
}

export default Testimonials