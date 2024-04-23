import React from 'react'
import CardPic from 'app/assets/img/370x370.jpg'
import CardComponent from 'components/CardComponent'
import { Col, Row } from 'reactstrap'

const HomePageServiceCards = () => {
    return (
        <Row className='justify-content-center card-row'>
            <Col md='4' style={{ maxWidth: '370px', margin: '0 10px' }}>
                <CardComponent
                    cardClassName='home-page-card'
                    title='Paramedical Artistry'
                    content='Specialized services in Paramedicla Artistry.'
                    imgPosition='top'
                    src={CardPic}
                    altText='Card image cap'
                    buttonClassName='home-page-card-btn'
                    buttonLabel='From $125'
                    to='/services'
                    midButton={true}
                />
            </Col>
            <Col md='4' style={{ maxWidth: '370px', margin: '0 10px' }}>
                <CardComponent
                    cardClassName='home-page-card'
                    title='Nutrition and Training'
                    content='Comprehensive guidance on nutrition and fitness for all performance levels.'
                    imgPosition='top'
                    src={CardPic}
                    altText='Card image cap'
                    buttonClassName='home-page-card-btn'
                    buttonLabel='From $155'
                    to='/services'
                    midButton={true}
                />
            </Col>
            <Col md='4' style={{ maxWidth: '370px', margin: '0 10px' }}>
                <CardComponent
                    cardClassName='home-page-card'
                    title='Hair Tissue Mineral Analysis'
                    content='Detailed analysis of hair tissue minerals. Includes a tailored detox and 1 hour consultation results.'
                    imgPosition='top'
                    src={CardPic}
                    altText='Card image cap'
                    buttonClassName='home-page-card-btn'
                    buttonLabel='From $479'
                    to='/services'
                    midButton={true}
                />
            </Col>
        </Row>
    )
}

export default HomePageServiceCards
