import React from 'react'
import TESTIMONIALS from 'components/Testimonials/TESTIMONIALS'
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Row
} from 'reactstrap'

import './Testimonials.css'

const Testimonials = () => {
    return (
        <Row className='testimonial-row'>
            {TESTIMONIALS.map((testimonial) => (
                <Col
                    md={{ size: 10, offset: 1 }}
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
