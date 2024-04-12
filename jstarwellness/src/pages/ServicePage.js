import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import ServiceItem from '../components/ServicesOfferred/ServiceItem.js'
import SERVICES from '../components/ServicesOfferred/SERVICES.js'

const ServicePage = () => {
    return (
        <Container>
            <Row>
                <div>
                    <h1>Hair Tissue Mineral Analysis Testing:</h1>
                    <p></p>
                    <h1>Paramedical Artistry Tattooing:</h1>
                    <p>
                        Explore the world of non-invasive Paramedical Artistry
                        Tattooing, an offering that extends beyond wellness into
                        self-confidence. Jennifer's skilled use of a rotary
                        machine stimulates your body's natural healing
                        processes, improving skin texture, depth, and color.
                        This service is a game-changer for addressing stretch
                        marks, scars, and other skin concerns.
                    </p>
                </div>
            </Row>
            <Row className='justify-content-center'>
                {SERVICES.map((service) => (
                    <Col md='10' key={service.id}>
                        <ServiceItem {...service} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ServicePage
