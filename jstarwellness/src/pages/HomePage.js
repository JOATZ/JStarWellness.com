import { Link } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

import HomeCarousel from '../components/HomeCarousel'
import ServiceTypeCards from '../components/ServiceTypeCards'

const HomePage = () => {
    return (
        <>
            <HomeCarousel />
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
