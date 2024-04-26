import React, { useEffect } from 'react'
import CardComponent from 'components/CardComponent'
import { Col, Container, Row } from 'reactstrap'

import 'css/ServicePage.css'

import SERVICES from 'SITE_DATA/SERVICES.js'

const ServicePage = () => {
    useEffect(() => {})
    return (
        <Container className='services-page-container'>
            <Row>
                <Col
                    className='services-intro-col'
                    xl={{ size: 10, offset: 1 }}
                >
                    <h2>Paramedical Artistry Tattooing:</h2>
                    <p>
                        Explore the world of non-invasive Paramedical Artistry
                        Tattooing, an offering that extends beyond wellness into
                        self-confidence. Jennifer's skilled use of a rotary
                        machine stimulates your body's natural healing
                        processes, improving skin texture, depth, and color.
                        This service is a game-changer for addressing stretch
                        marks, scars, and other skin concerns.
                    </p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                {SERVICES.filter((service) => service.serviceType === 'PA').map(
                    (service) => (
                        <Col
                            xl={{ size: 10, offset: 1 }}
                            key={service.id}
                            className='service-item-card-col'
                        >
                            <CardComponent
                                cardClassName='service-item-card'
                                title={service.name}
                                imgPosition='start'
                                content={
                                    <>
                                        <p>{service.description}</p>
                                        <p>
                                            Price: ${service.lowPrice}
                                            {service.highPrice
                                                ? ` - ${service.highPrice}`
                                                : ''}
                                        </p>
                                    </>
                                }
                                src={service.src}
                                altText={`Service: ${service.name}`}
                            />
                        </Col>
                    )
                )}
            </Row>
            <Col className='services-intro-col' md={{ size: 8, offset: 2 }}>
                <h2>Nutrition and Training</h2>
                <p>
                    Jennifer offers online nutrition plans tailored to the
                    season you're in and the one you're heading towards. Her
                    expertise spans working with diverse populations, including
                    kids, pregnant individuals, athletes, and more. Fat loss
                    sprints and a focus on daily detoxification contribute to a
                    holistic and sustainable approach. Recognizing that one size
                    does not fit all, Jennifer is dedicated to crafting
                    personalized nutrition and exercise plans. Before embarking
                    on your wellness journey, she conducts a thorough and honest
                    assessment, taking into account your genetics, experiences,
                    traditions, and more. The result? A plan that aligns with
                    your goals, needs, and lifestyle.
                </p>
            </Col>
            <Row className='justify-content-center'>
                {SERVICES.filter((service) => service.serviceType === 'NT').map(
                    (service) => (
                        <Col
                            md='10'
                            key={service.id}
                            className='service-item-card-col'
                        >
                            <CardComponent
                                cardClassName='service-item-card'
                                title={service.name}
                                imgPosition='start'
                                content={
                                    <>
                                        <p>{service.description}</p>
                                        <p>
                                            Price: ${service.lowPrice}
                                            {service.highPrice
                                                ? ` - ${service.highPrice}`
                                                : ''}
                                        </p>
                                    </>
                                }
                                src={service.src}
                                altText={`Service: ${service.name}`}
                            />
                        </Col>
                    )
                )}
            </Row>
        </Container>
    )
}

export default ServicePage
