import React from 'react'
import CardPic from 'app/assets/img/370x370.jpg'
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

const ServiceTypeCards = () => {
    return (
        <Row className='justify-content-center card-row'>
            <Col md='4' style={{ maxWidth: '370px', margin: '0 10px' }}>
                <Card>
                    <CardImg
                        top
                        style={{ width: '100%' }}
                        src={CardPic}
                        alt='Card image cap'
                    />
                    <Button>From $125</Button>
                    <CardBody>
                        <CardTitle tag='h5'>Paramedical Artistry</CardTitle>
                        <CardText>
                            Specialized services in Paramedicla Artistry.
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
                    <Button>From $155</Button>
                    <CardBody>
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
                    <CardImg
                        top
                        style={{ width: '100%' }}
                        src={CardPic}
                        alt='Card image cap'
                    />
                    <Button>From $479</Button>
                    <CardBody>
                        <CardTitle tag='h5'>
                            Hair Tissue Mineral Analysis
                        </CardTitle>
                        <CardText>
                            Detailed analysis of hair tissue minerals. Includes
                            a tailored detox and 1 hour consultation results.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default ServiceTypeCards
