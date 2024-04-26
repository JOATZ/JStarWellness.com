import React from 'react'
import CardComponent from 'components/CardComponent'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'

import 'css/Gallery.css'

import galleryImages from 'SITE_DATA/GALLERY.js'

const Gallery = () => {
    return (
        <Container>
            <Row>
                {galleryImages.map((image) => (
                    <Col
                        lg='4'
                        md='6'
                        key={image.id}
                        className='before-after-card-col'
                    >
                        <CardComponent
                            cardClassName='before-after-card'
                            title={image.headline}
                            content={image.content}
                            src={image.src}
                            imgPosition='top'
                            altText={image.headline}
                            footerContent={
                                <>
                                    {image.service}
                                    <Button
                                        tag={Link}
                                        to={image.url}
                                        className='gallery-btn'
                                    >
                                        Book
                                    </Button>
                                </>
                            }
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Gallery
