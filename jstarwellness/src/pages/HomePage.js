import { Link, useNavigate } from 'react-router-dom'
import { Button, Container, Row } from 'reactstrap'

import HomeCarousel from '../components/HomeCarousel'
import ServiceTypeCards from '../components/ServicesOfferred/ServiceTypeCards.js'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <>
            <HomeCarousel />
            <h1 className='home-page-header'>Rediscover Your Confidence!</h1>
            <p className='home-page-intro'>
                Embark on a journey of holistic wellness with our comprehensive
                services. With over two decades of experience in the wellness
                industry, our personalized nutrition and exercise coaching are
                tailored to your unique needs. Through Hair Tissue Mineral
                Analysis Testing, gain insights into your body's balance and
                well-being. Experience the transformative artistry of
                paramedical procedures, fostering confidence and enhancing
                natural beauty. With compassionate care and personalized
                consultations, we are committed to empowering you to embrace
                your season, rediscover your confidence, and achieve holistic
                well-being.
            </p>
            <Container className='home-page-buttons'>
                <Button
                    tag='a'
                    target='_blank'
                    href='https://jstar-wellness.square.site/s/shop'
                >
                    Book a Service
                </Button>
                <Button onClick={() => navigate('/about#top')}>
                    Learn More
                </Button>
            </Container>
            <p className='home-page-intro'>
                Jennifer's Wellness Services is your gateway to a wellness
                journey that celebrates your uniqueness. Embrace education,
                flexibility, and results crafted just for you. Your confidence,
                inside and out, begins here.
            </p>
            <Container className='home-page-content'>
                <h1>Core Health Services</h1>
                <Row>
                    <h2>Personalized Nutrition Coaching:</h2>
                    <p>
                        I analyze your unique nutritional needs prior to
                        creating the program for you. I can also use Hair Tissue
                        Mineral Analysis Testing (HTMA) to create a deeper,
                        customized nutrition plan that supports your body's
                        balance and well-being. We utilize cutting edge
                        techniques to assess mineral imbalances in your body,
                        offering insights to potential health improvements.
                    </p>
                    <h2>Comprehensive Training Programs:</h2>
                    <p>
                        My exercise and training coaching is designed to meet
                        you at your current fitness level, gradually guiding you
                        towards your goals with personalized and effective
                        routines. My training programs are meticulously crafted
                        for both home and fitness facility environments, with a
                        sharp focus on achieving your specific goals. They are
                        tailored to foster adaptation, progression, and enhanced
                        functional movement, all while uniquely aligning with
                        your personal capabilities.
                    </p>
                </Row>
                <Row style={{ textAlign: 'justify', marginTop: '50px' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        Paramedical Artistry:
                    </h2>
                    <p>
                        Additionally, as a skilled paramedical artist I
                        specialize in stretch mark & scar rejuvenation
                        camouflage, aiming to restore and enhance your natural
                        beauty. Personalized Consultations: I believe in open
                        and personalized consultations to understand your
                        specific needs, ensuring that my services align
                        seamlessly with your expectations. Compassionate Care:
                        Beyond the technical aspects of my work, I prioritize
                        creating a caring and supportive environment, fostering
                        a sense of confidence and empowerment in every client.
                    </p>
                </Row>
            </Container>
            <ServiceTypeCards />
            <Container className='home-page-buttons'>
                <Button onClick={() => navigate('/about#myApproach')}>
                    Discover why our services and experience stand out!
                </Button>
            </Container>
        </>
    )
}

export default HomePage
