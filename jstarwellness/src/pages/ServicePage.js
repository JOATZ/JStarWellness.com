import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import SERVICES from '../app/assets/servicesList/SERVICES.js'
import ServiceItem from '../components/ServiceItem.js'

const ServicePage = () => {
    return (
        <Container>
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
