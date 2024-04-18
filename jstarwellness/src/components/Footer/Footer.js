import { IconContext } from 'react-icons'
import {
    FaCcPaypal,
    FaEnvelope,
    FaFacebookSquare,
    FaInstagramSquare,
    FaPhoneAlt,
    FaTwitterSquare
} from 'react-icons/fa'
import { IoLogoVenmo } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

import 'components/Footer/Footer.css'

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
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
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
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
                            <h5>Payments</h5>
                            <a
                                target='blank'
                                href='http://paypal.com/Star3655@yahoo.com '
                            >
                                <FaCcPaypal />
                            </a>
                            <a
                                target='blank'
                                href='http://venmo.com/Sudavida1988'
                            >
                                <IoLogoVenmo />
                            </a>
                        </IconContext.Provider>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+18052687565'
                        >
                            <FaPhoneAlt /> 1-805-268-7565
                        </a>
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
                            client worldwide. Paramedical Artistry services
                            located on 125 Union Avenue, Orcutt, CA NOTES FOR
                            LATER: afterpay, square, venmo, paypal, zelle
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer