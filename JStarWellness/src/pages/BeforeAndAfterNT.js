import React from 'react'
import CardComponent from 'components/CardComponent.js'
import { Col, Container, Row } from 'reactstrap'

import 'css/BeforeAndAfter.css'

import ntImages from 'SITE_DATA/BnANT.js'

const BeforeAndAfterNT = () => {
    return (
        <Container>
            <Row>
                {ntImages.map((image) => (
                    <Col
                        xl='3'
                        lg='4'
                        md='6'
                        key={image.clientId}
                        className='before-after-card-col'
                    >
                        <CardComponent
                            cardClassName='before-after-card'
                            title={image.headline}
                            content={image.content}
                            src={image.src}
                            imgPosition='top'
                            altText={image.headline}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BeforeAndAfterNT
