import React from 'react'
import { Col, Row } from 'reactstrap' // Import Row and Col

import pmImages from '../app/assets/beforeAfter/pm/pm.js'
import BeforeAfterCard from '../components/BeforeAfterCard.js'
import SubHeader from '../components/SubHeader.js'

const BeforeAndAfterPM = () => {
    return (
        <div>
            <SubHeader current='Before and After' />
            <Row>
                {pmImages.map((image) => (
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

export default BeforeAndAfterPM
