import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap'

import ParamedicalImage from '../app/assets/img/370x370.jpg'
import NutritionImage from '../app/assets/img/370x370.jpg'
import SubHeader from '../components/SubHeader.js'

const Gallery = () => {
    return (
        <>
            <SubHeader title='Gallery' subtitle='Before and After' />
            <Row>
                <Col md='6' xs='12' className='d-flex justify-content-center'>
                    <Link to='/BeforeAndAfterPM'>
                        <Card className='gallery-card'>
                            <CardImg
                                top
                                src={ParamedicalImage}
                                alt='Paramedical Services'
                            />
                            <CardBody>
                                <CardTitle tag='h5'>
                                    Paramedical Artistry
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col md='6' xs='12' className='d-flex justify-content-center'>
                    <Link to='/BeforeAndAfterNT'>
                        <Card className='gallery-card'>
                            <CardImg
                                top
                                src={NutritionImage}
                                alt='Nutrition and Training'
                            />
                            <CardBody>
                                <CardTitle tag='h5'>
                                    Nutrition and Training
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default Gallery
