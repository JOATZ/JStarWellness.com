import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { Col, Container, Row } from 'reactstrap'

import 'pages/ContactPage.css'

const ContactPage = () => {
    return (
        <Container className='contact-page-container'>
            <Row className='row-content align-items-center'>
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
                <Col>
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
        </Container>
    )
}

export default ContactPage
