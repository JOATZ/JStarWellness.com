import React, { useEffect } from 'react'
import ParamedicalImage from 'app/assets/img/370x370.webp'
import NutritionImage from 'app/assets/img/370x370.webp'
import CardComponent from 'components/CardComponent'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

import './Gallery.css'

const Gallery = () => {
    useEffect(() => {
        import('pages/BeforeAndAfterPM')
        import('pages/BeforeAndAfterNT')
    })
    return (
        <Container>
            <Row className='gallery-card-row'>
                <Col sm='5' md='4' lg='3' className='gallery-card-col'>
                    <Link to='/BeforeAndAfterPM'>
                        <CardComponent
                            cardClassName='gallery-card'
                            title='Paramedical Artistry'
                            content=''
                            src={ParamedicalImage}
                            imgPosition='top'
                            altText='Paramedical Artistry Services'
                        />
                    </Link>
                </Col>
                <Col sm='5' md='4' lg='3' className='gallery-card-col'>
                    <Link to='/BeforeAndAfterNT'>
                        <CardComponent
                            cardClassName='gallery-card'
                            title='Nutrition and Training'
                            content=''
                            src={NutritionImage}
                            imgPosition='top'
                            altText='Nutrition and Training Services'
                        />
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Gallery
