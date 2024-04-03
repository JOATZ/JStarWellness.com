import React from 'react'
import { Card, Col, Row } from 'reactstrap'

const ServiceItem = ({ name, description, lowPrice, highPrice, src }) => (
    <Card className='service-item mb-2 mt-2'>
        <Row noGutters>
            <Col
                md='4'
                className='d-flex justify-content-center align-items-center'
            >
                <img
                    src={src}
                    alt={`Service: ${name}`}
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover'
                    }}
                    className='img-fluid'
                />
            </Col>
            <Col md='8'>
                <div className='p-3'>
                    <h5 style={{ fontWeight: 'bold' }}>{name}</h5>
                    <p>{description}</p>
                    <p className='text-muted'>
                        Price: ${lowPrice}
                        {highPrice ? ` - ${highPrice}` : ''}
                    </p>
                </div>
            </Col>
        </Row>
    </Card>
)

export default ServiceItem
