import { IconContext } from 'react-icons'
import {
    FaEnvelope,
    FaFacebookSquare,
    FaInstagramSquare,
    FaPhoneAlt,
    FaTwitterSquare
} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

import 'components/Footer/Footer.css'

const Footer = () => {
    const location = useLocation()

    return (
        <footer className='site-footer'>
            <Container fluid className='footer-container'>
                <Row className='footer-row'>
                    <Col md='4' className='d-none d-md-block'>
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
                    <Col md='4' className='text-center align-self-center'>
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
                        {location.pathname !== '/contact' && (
                            <Link to='/contact'>
                                <h5>Payments</h5>
                            </Link>
                        )}
                    </Col>
                    <Col md='4' className='text-end d-none d-md-block'>
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
            <p className='footer-copy'>
                Copyright &copy; {new Date().getFullYear()} J Star Wellnes
                L.L.C. Web Design by{' '}
                <a href='https://github.com/JOATZ/'>JOATZ</a>. All rights
                reserved.
            </p>
        </footer>
    )
}

export default Footer
