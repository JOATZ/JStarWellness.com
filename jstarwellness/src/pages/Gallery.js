import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap'

import ParamedicalImage from '../app/assets/img/370x370.jpg'
import NutritionImage from '../app/assets/img/370x370.jpg'
import SubHeader from '../components/SubHeader.js'

const Gallery = () => {
    return (
        <>
            <SubHeader title='Gallery' subtitle='Before and After' />
            <Row>
                <Col md='6' xs='12'>
                    <NavLink to='/BeforeAndAfterPM'>
                        <Card className='gallery-card'>
                            <CardImg
                                top
                                src={ParamedicalImage}
                                alt='Paramedical Services'
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <CardBody>
                                <CardTitle tag='h5'>
                                    Paramedical Artistry
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </NavLink>
                </Col>
                <Col md='6' xs='12'>
                    <NavLink to='/BeforeAndAfterNT'>
                        <Card className='gallery-card'>
                            <CardImg
                                top
                                src={NutritionImage}
                                alt='Nutrition and Training'
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <CardBody>
                                <CardTitle tag='h5'>
                                    Nutrition and Training
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </NavLink>
                </Col>
            </Row>
        </>
    )
}

export default Gallery
