import ProfilePic from 'app/assets/img/JennProfilePic.webp'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { IoLogoVenmo } from 'react-icons/io5'
import { SiAfterpay, SiPaypal, SiSquare, SiZelle } from 'react-icons/si'
import { Col, Container, Row } from 'reactstrap'

import 'css/ContactPage.css'

const ContactPage = () => {
    return (
        <Container className='contact-page-container'>
            <Row className='row-content align-items-center'>
                <Col sm='3'>
                    <img
                        src={ProfilePic}
                        alt='Jenn'
                        className='contact-page-pic'
                    />
                </Col>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                        Paramedical Artistry Services
                        <br />
                        125 Union Avenue
                        <br />
                        Orcutt, CA 93455
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col sm='4'>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='rel:+18052687565'
                    >
                        <FaPhoneAlt />
                        1-805-268-7565
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
                </Col>
            </Row>
            <br />
            <h2>Payments</h2>
            <div className='payments'>
                <a target='blank' href='http://paypal.com/Star3655@yahoo.com '>
                    <SiPaypal />
                </a>
                <a target='blank' href='http://venmo.com/Sudavida1988'>
                    <IoLogoVenmo />
                </a>
                <a target='blank' href='http://venmo.com/Sudavida1988'>
                    <SiZelle />
                </a>
                <a
                    target='blank'
                    href='https://jstar-wellness.square.site/s/shop'
                >
                    <SiSquare />
                </a>
                <a target='blank' href='http://venmo.com/Sudavida1988'>
                    <SiAfterpay />
                </a>
            </div>
            -still need afterpay and Zelle info to connect links
        </Container>
    )
}

export default ContactPage
