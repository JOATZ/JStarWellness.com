import React from 'react'
import ParamedicalImage from 'app/assets/img/370x370.jpg'
import NutritionImage from 'app/assets/img/370x370.jpg'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap'

import './Gallery.css'

const Gallery = () => {
    return (
        <Row className='gallery-card-row'>
            <Col xs='12' sm='5' md='4' lg='3' className='gallery-card-col'>
                <Link to='/BeforeAndAfterPM'>
                    <Card className='gallery-card'>
                        <CardImg
                            top
                            src={ParamedicalImage}
                            alt='Paramedical Artistry Services'
                        />
                        <CardBody>
                            <CardTitle tag='h5'>Paramedical Artistry</CardTitle>
                        </CardBody>
                    </Card>
                </Link>
            </Col>
            <Col xs='12' sm='5' md='4' lg='3' className='gallery-card-col'>
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
    )
}

export default Gallery
