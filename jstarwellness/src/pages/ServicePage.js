import React from 'react'
import ServiceItem from 'components/ServicesOfferred/ServiceItem.js'
import SERVICES from 'components/ServicesOfferred/SERVICES.js'
import { Col, Container, Row } from 'reactstrap'

import 'pages/ServicePage.css'

const ServicePage = () => {
    return (
        <Container>
            <Row>
                <div>
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
                    <Col
                        md='10'
                        key={service.id}
                        className='service-item-card-col'
                    >
                        <ServiceItem {...service} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ServicePage
