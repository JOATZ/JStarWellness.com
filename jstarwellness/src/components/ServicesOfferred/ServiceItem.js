import React from 'react'
import { Card, Col, Row } from 'reactstrap'

const ServiceItem = ({ name, description, lowPrice, highPrice, src }) => (
    <Card className='service-item-card'>
        <Row noGutters>
            <Col md='4' className='service-item-col'>
                <img src={src} alt={`Service: ${name}`} className='img-fluid' />
            </Col>
            <Col md='8'>
                <div className='p-3'>
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <p>
                        Price: ${lowPrice}
                        {highPrice ? ` - ${highPrice}` : ''}
                    </p>
                </div>
            </Col>
        </Row>
    </Card>
)

export default ServiceItem
