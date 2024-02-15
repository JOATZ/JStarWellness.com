import { Col, Container, Row } from 'reactstrap'

import ProfilePic from '../app/assets/img/JennProfilePic.webp'

const Profile = () => {
    return (
        <Container>
            <Row style={{ maxHeight: '100vh', overflow: 'hidden' }}>
                <Col sm={3}>
                    <img
                        src={ProfilePic}
                        alt='Jennifer'
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Col>
                <Col>
                    <h3>Embrace Your Season</h3>
                    <p>
                        Hi, I'm Jennifer. My mission is to empower individuals
                        on their journey to optimal well-being by providing
                        personalized nutrition and exercise coaching. As a
                        dedicated Hair Tissue Mineral Analysis (HTMA)
                        practitioner, I go beyond conventional approaches,
                        delving into the unique needs and intricacies of each
                        individual. In addition, I want to empower individuals
                        through the transformative artistry of paramedical
                        procedures, fostering confidence, and helping clients
                        rediscover their natural beauty. I'm committed to
                        providing personalized and compassionate services that
                        go beyond skin-deep, catering to the unique needs and
                        aspirations of each client.
                    </p>
                    <h3>Rediscover Your Confidence</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile
