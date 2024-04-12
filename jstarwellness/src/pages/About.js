import { Col, Container, Row } from 'reactstrap'

import ProfilePic from '../app/assets/img/JennProfilePic.webp'
import Client1 from '../app/assets/img/nt/ClientComp1.webp'
import Client2 from '../app/assets/img/nt/ClientComp2.webp'
import Client4 from '../app/assets/img/nt/ClientComp4.webp'
import FitPic1 from '../app/assets/img/nt/Fit1.webp'
import JennComp1 from '../app/assets/img/nt/JennComp1.webp'
import JennComp2 from '../app/assets/img/nt/JennComp2.webp'
import Client3 from '../app/assets/img/nt/pic9.webp'

const Profile = () => {
    return (
        <Container>
            <Row
                style={{
                    maxHeight: '100vh',
                    overflow: 'hidden',
                    marginTop: '50px'
                }}
            >
                <Col sm={3} className='about-page-col'>
                    <img
                        src={ProfilePic}
                        alt='Jennifer'
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Col>
                <Col className='about-page-col'>
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
            <Row style={{ textAlign: 'justify', marginTop: '50px' }}>
                <h2 style={{ textAlign: 'center' }}>Mission Statement: </h2>
                <p>
                    At JStar Wellness LLC, my mission is to empower individuals
                    on their journey to optimal well-being by providing
                    personalized nutrition, training, and exercise coaching. As
                    a dedicated Hair Tissue Mineral Analysis (HTMA)
                    practitioner, I go beyond conventional approaches, delving
                    into the unique needs and intricacies of each individual. In
                    addition, I want to empower individuals through the
                    transformative artistry of paramedical procedures, fostering
                    confidence, and helping clients rediscover their natural
                    beauty. I'm committed to providing personalized and
                    compassionate services that go beyond skin-deep, catering to
                    the unique needs and aspirations of each client.
                </p>
            </Row>
            <Row style={{ textAlign: 'justify', marginTop: '50px' }}>
                <h2 style={{ textAlign: 'center' }}>My Approach:</h2>
                <p>
                    I believe in meeting you exactly where you are, recognizing
                    that every person is in a different season of life. By
                    understanding your goals, needs, wants, and abilities, I
                    tailor our coaching to create a customized plan that aligns
                    with your aspirations. Whether you're looking to enhance
                    your physical performance, improve your overall health, or
                    achieve a specific fitness goal, I'm here to guide you.
                </p>
                <p>
                    In Paramedical Artistry my approach is centered on enhancing
                    your natural features while addressing specific concerns.
                    With a blend of artistic expertise and paramedical
                    precision, I strive to create a harmonious fusion of
                    aesthetics and personal expression.
                </p>
            </Row>
            <Row style={{ textAlign: 'justify', marginTop: '50px' }}>
                <h2 style={{ textAlign: 'center' }}>My Commitment:</h2>
                <p>
                    My commitment extends beyond the artistic canvas to the
                    well-being of my clients. I aim to not only provide
                    exceptional services in this journey towards feeling and
                    looking your best but also to be a source of encouragement
                    and support. My goal is not just to help you achieve
                    short-term results but to empower you with the knowledge and
                    tools for long-term well-being while celebrating the
                    uniqueness that makes each of us extraordinary. Embrace your
                    individuality. Embrace your season. Rediscover your
                    confidence. Embrace your beauty. Let me be your partner in
                    achieving holistic health, wellness, renewal and self
                    expression.
                </p>
            </Row>
            <Row
                style={{
                    maxHeight: '100vh',
                    overflow: 'hidden',
                    marginTop: '50px'
                }}
            >
                <Col className='about-page-col'>
                    <h2>A Two-Decade Legacy</h2>
                    <p>
                        Are you seeking a wellness partner who brings two
                        decades of expertise, a commitment to continuous
                        learning, and a personalized approach tailored to your
                        individuality? Look no further than Jennifer's Wellness
                        Services. Here's why working with Jennifer is an
                        investment in your holistic well-being. Jennifer boasts
                        20 years of rich experience in the Wellness industry.
                        Her journey has been a tapestry of growth, learning, and
                        a deep understanding that science continually evolves.
                        This wealth of experience ensures that your wellness
                        journey is guided by seasoned expertise.
                    </p>
                </Col>
                <Col sm={3} className='about-page-col'>
                    <img
                        src={FitPic1}
                        alt='Jennifer when younger flexing her arm.'
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Col>
            </Row>
            <Row
                style={{
                    maxHeight: '100vh',
                    overflow: 'hidden',
                    marginTop: '50px'
                }}
            >
                <Col sm={3}>
                    <img
                        src={JennComp1}
                        alt='Jennifer'
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Col>
                <Col className='about-page-col'>
                    <h2 style={{ textAlign: 'center' }}>
                        Education and Flexibility:
                    </h2>
                    <p>
                        Experience a wealth of education and flexibility in your
                        wellness journey. Jennifer believes in the "why" behind
                        your specific plan. It's not just about the exercises or
                        nutrition; it's about understanding and adopting a plan
                        that works for you in the long run.
                    </p>
                </Col>
            </Row>
            <Row
                style={{
                    maxHeight: '100vh',
                    overflow: 'hidden',
                    marginTop: '50px'
                }}
            >
                <Col className='about-page-col'>
                    <h2 style={{ textAlign: 'center' }}>
                        Nutrition & Exercise Expertise:
                    </h2>
                    <p>
                        Jennifer offers online nutrition plans tailored to the
                        season you're in and the one you're heading towards. Her
                        expertise spans working with diverse populations,
                        including kids, pregnant individuals, athletes, and
                        more. Fat loss sprints and a focus on daily
                        detoxification contribute to a holistic and sustainable
                        approach.
                    </p>
                </Col>
                <Col sm={3} className='about-page-col'>
                    <img
                        src={Client3}
                        alt='Jennifer when younger flexing her arm.'
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Col>
                <Row
                    style={{
                        maxHeight: '100vh',
                        overflow: 'hidden',
                        marginTop: '50px'
                    }}
                >
                    <h2 style={{ textAlign: 'center' }}>
                        Personalized Plans, Not Cookie-Cutter Solutions:
                    </h2>
                    <p>
                        Recognizing that one size does not fit all, Jennifer is
                        dedicated to crafting personalized nutrition and
                        exercise plans. Before embarking on your wellness
                        journey, she conducts a thorough and honest assessment,
                        taking into account your genetics, experiences,
                        traditions, and more. The result? A plan that aligns
                        with your goals, needs, and lifestyle.
                    </p>
                </Row>
                <Row>
                    <Col sm={3} className='about-page-col'>
                        <img
                            src={JennComp2}
                            alt='Jennifer when younger flexing her arm.'
                            style={{ maxWidth: 'auto', height: '250px' }}
                        />
                    </Col>
                    <Col sm={3} className='about-page-col'>
                        <img
                            src={Client1}
                            alt='Jennifer when younger flexing her arm.'
                            style={{ maxWidth: 'auto', height: '250px' }}
                        />
                    </Col>
                    <Col sm={3} className='about-page-col'>
                        <img
                            src={Client2}
                            alt='Jennifer when younger flexing her arm.'
                            style={{ maxWidth: 'auto', height: '250px' }}
                        />
                    </Col>
                    <Col sm={3} className='about-page-col'>
                        <img
                            src={Client4}
                            alt='Jennifer when younger flexing her arm.'
                            style={{ maxWidth: 'auto', height: '250px' }}
                        />
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Profile
