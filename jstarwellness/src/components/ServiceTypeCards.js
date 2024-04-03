import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Row
} from 'reactstrap'

import CardPic from '../app/assets/img/370x370.jpg'
import SERVICES from './servicesList/SERVICES.js'

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
                            Specialized services in Paramedicla Artistry.
                        </CardText>
                        <Button
                            style={{
                                display: 'block',
                                margin: '0 auto'
                            }}
                        >
                            From $125
                        </Button>
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
                    <Button
                        style={{
                            position: 'absolute',
                            bottom: '115px',
                            right: '20%',
                            variant: 'primary',
                            width: '200px'
                        }}
                    >
                        From $155
                    </Button>
                    <CardBody>
                        <br />
                        <CardTitle tag='h5'>Nutrition and Training</CardTitle>
                        <CardText>
                            Comprehensive guidance on nutrition and fitness for
                            all performance levels.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md='4' style={{ maxWidth: '370px', margin: '0 10px' }}>
                <Card>
                    <Button
                        variant='primary'
                        style={{
                            position: 'absolute',
                            bottom: '55%', // Adjust as needed
                            right: '35%', // Adjust as needed
                            variant: 'primary'
                        }}
                    >
                        From $479
                    </Button>
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
                            Detailed analysis of hair tissue minerals. includes
                            a 1 hour consultation and detox plan as pertains to
                            results.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default ServiceTypeCards
