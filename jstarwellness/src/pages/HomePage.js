import { Link } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

import HomeCarousel from '../components/HomeCarousel'
import ServiceTypeCards from '../components/ServiceTypeCards'

const HomePage = () => {
    return (
        <>
            <HomeCarousel />
            <h1 className='home-page-header'>Rediscover Your Confidence!</h1>
            <h2 className='home-page-intro'>
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
            </h2>
            <Container className='home-page-buttons'>
                <Button
                    tag='a'
                    target='_blank'
                    href='https://jstar-wellness.square.site/s/shop'
                    style={{
                        backgroundColor: '#80428b',
                        borderColor: '#80428b',
                        color: 'white',
                        margin: '10px'
                    }}
                >
                    Book a Service
                </Button>
                <Link
                    to='/contact'
                    className='btn btn-outline'
                    style={{
                        color: '#80428b',
                        borderColor: '#80428b',
                        margin: '10px'
                    }}
                >
                    Learn More
                </Link>
            </Container>
            <ServiceTypeCards />
        </>
    )
}

export default HomePage
