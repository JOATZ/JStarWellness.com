import { Link } from 'react-router-dom'
import { Button, Container, Row } from 'reactstrap'

import HomeCarousel from '../components/HomeCarousel'
import ServiceTypeCards from '../components/ServicesOfferred/ServiceTypeCards.js'

const HomePage = () => {
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
                <Link to='/about' className='btn btn-outline'>
                    Learn More
                </Link>
            </Container>
            <Container className='home-page-content'>
                <h1>Core Health Services</h1>
                <Row>
                    <h2>Personalized Nutrition Coaching:</h2>
                    <p>
                        I analyze your unique nutritional needs prior to
                        creating the program for you. I can also use HTMA to
                        create a deeper, customized nutrition plan that supports
                        your body's balance and well-being. We utilize cutting
                        edge techniques to assess mineral imbalances in your
                        body, offering insights to potential health
                        improvements. Comprehensive Training Programs: My
                        exercise and training coaching are designed to meet you
                        at your current fitness level, gradually guiding you
                        towards your goals with personalized and effective
                        routines.
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
                <Link to='/about' className='btn btn-outline'>
                    Discover why our service and experience stand out!
                </Link>
            </Container>
        </>
    )
}

export default HomePage
