import React from 'react'
import BeforeAfterCard from 'components/beforeAfter/BeforeAfterCard.js'
import ntImages from 'components/beforeAfter/nt/nt.js'
import { Col, Row } from 'reactstrap'

const BeforeAndAfterNT = () => {
    return (
        <div>
            <Row>
                {ntImages.map((image) => (
                    <Col
                        xl='3'
                        lg='4'
                        md='6'
                        xs='12'
                        key={image.clientId}
                        className='d-flex justify-content-center'
                    >
                        <BeforeAfterCard
                            headline={image.headline}
                            author={image.author}
                            content={image.content}
                            src={image.src}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default BeforeAndAfterNT