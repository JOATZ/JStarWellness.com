import { IconContext } from 'react-icons'
import {
    FaEnvelope,
    FaFacebookSquare,
    FaInstagramSquare,
    FaPhoneAlt,
    FaTwitterSquare
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

import 'components/Footer/Footer.css'

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container fluid className='footer-container'>
                <Row className='footer-row'>
                    <Col xs='4' md='5'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/gallery'>Gallery</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/testimonials'>Testimonials</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col
                        xs='8'
                        md='2'
                        className='text-center align-self-center'
                    >
                        <IconContext.Provider
                            value={{
                                className: 'footer-icons'
                            }}
                        >
                            <h5>Social</h5>
                            <a
                                target='blank'
                                href='http://www.instagram.com/gotyoucovered805'
                            >
                                <FaInstagramSquare />
                            </a>
                            <a target='blank' href='http://www.facebook.com/'>
                                <FaFacebookSquare />
                            </a>
                            <a target='blank' href='http://twitter.com/'>
                                <FaTwitterSquare />
                            </a>
                        </IconContext.Provider>
                    </Col>
                    <Col sm='4' md='5' className='text-end d-none d-md-block'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+18052687565'
                        >
                            <FaPhoneAlt /> 1-805-268-7565
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:Stepup2shapeup@gmail.com'
                        >
                            <FaEnvelope />
                            Stepup2shapeup@gmail.com
                        </a>
                        <br />
                        <p>
                            Online Nutrition & Training can be done for any
                            client worldwide. <br />
                            Paramedical Artistry services located on 125 Union
                            Avenue, Orcutt, CA
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
