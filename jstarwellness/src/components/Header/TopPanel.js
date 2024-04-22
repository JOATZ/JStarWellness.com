import React from 'react'
import {
    FaEnvelope,
    FaFacebookSquare,
    FaInstagramSquare,
    FaPhoneAlt,
    FaTwitterSquare
} from 'react-icons/fa'
import { Col, Row } from 'reactstrap'

const TopPanel = () => {
    return (
        <Row className='top-panel-contents'>
            <Col className='top-panel'>
                <a
                    role='button'
                    className='btn btn-link'
                    href='tel:+18052687565'
                >
                    <FaPhoneAlt /> 1-805-268-7565
                </a>
                |
                <a
                    role='button'
                    className='btn btn-link'
                    href='mailto:Stepup2shapeup@gmail.com'
                >
                    <FaEnvelope /> Stepup2shapeup@gmail.com
                </a>
            </Col>
            <Col className='top-panel text-end'>
                <a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='me-2'
                >
                    <FaFacebookSquare />
                </a>
                <a
                    href='http://www.instagram.com/gotyoucovered805'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='me-2'
                >
                    <FaInstagramSquare />
                </a>
                <a
                    href='https://twitter.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='me-2'
                >
                    <FaTwitterSquare />
                </a>
            </Col>
        </Row>
    )
}

export default TopPanel
