import React from 'react'
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Row
} from 'reactstrap'

import CardPic from '../app/assets/img/370x370.jpg'

const ServiceTypeCards = () => {
    return (
        <Row className='justify-content-center'>
            <Col md='4' style={{ maxWidth: '370px', margin: '0 10px' }}>
                <Card>
                    <CardImg
                        top
                        style={{ width: '100%' }}
                        src={CardPic}
                        alt='Card image cap'
                    />
                    <CardBody>
                        <CardTitle tag='h5'>Paramedical Artistry</CardTitle>
                        <CardText>
                            Specialized services in paramedical artistry.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md='4' style={{ maxWidth: '370px', margin: '0 10px' }}>
                <Card>
                    <CardImg
                        top
                        style={{ width: '100%' }}
                        src={CardPic}
                        alt='Card image cap'
                    />
                    <CardBody>
                        <CardTitle tag='h5'>Nutrition and Training</CardTitle>
                        <CardText>
                            Comprehensive guidance on nutrition and fitness.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md='4' style={{ maxWidth: '370px', margin: '0 10px' }}>
                <Card>
                    <CardImg
                        top
                        style={{ width: '100%' }}
                        src={CardPic}
                        alt='Card image cap'
                    />
                    <CardBody>
                        <CardTitle tag='h5'>
                            Hair Tissue Mineral Analysis
                        </CardTitle>
                        <CardText>
                            Detailed analysis of hair tissue minerals.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default ServiceTypeCards
