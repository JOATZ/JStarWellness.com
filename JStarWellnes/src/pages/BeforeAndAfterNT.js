import React from 'react'
import ntImages from 'components/beforeAfter/nt/nt.js'
import CardComponent from 'components/CardComponent.js' // Updated import
import { Col, Container, Row } from 'reactstrap'

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
                            cardClassName='before-after-card' // Ensure this matches your CSS class
                            title={image.headline}
                            content={image.content}
                            src={image.src}
                            imgPosition='top'
                            altText={image.headline} // Assuming you want to use headline as altText
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BeforeAndAfterNT
