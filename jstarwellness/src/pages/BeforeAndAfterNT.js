import React from 'react'
import { Col, Row } from 'reactstrap' // Import Row and Col

import ntImages from '../app/assets/beforeAfter/nt/nt.js'
import BeforeAfterCard from '../components/BeforeAfterCard.js'
import SubHeader from '../components/SubHeader.js'

const BeforeAndAfterNT = () => {
    return (
        <div>
            <SubHeader current='Before and After' />
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