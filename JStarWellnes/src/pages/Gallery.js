import React from 'react'
import ParamedicalImage from 'app/assets/img/370x370.jpg'
import NutritionImage from 'app/assets/img/370x370.jpg'
import CardComponent from 'components/CardComponent'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

import './Gallery.css'

const Gallery = () => {
    return (
        <Row className='gallery-card-row'>
            <Col xs='12' sm='5' md='4' lg='3' className='gallery-card-col'>
                <Link to='/BeforeAndAfterPM'>
                    <CardComponent
                        cardClassName='gallery-card'
                        title='Paramedical Artistry'
                        content=''
                        src={ParamedicalImage}
                        altText='Paramedical Artistry Services'
                    />
                </Link>
            </Col>
            <Col xs='12' sm='5' md='4' lg='3' className='gallery-card-col'>
                <Link to='/BeforeAndAfterNT'>
                    <CardComponent
                        cardClassName='gallery-card'
                        title='Nutrition and Training'
                        content=''
                        src={NutritionImage}
                        altText='Nutrition and Training Services'
                    />
                </Link>
            </Col>
        </Row>
    )
}

export default Gallery
