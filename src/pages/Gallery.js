import React from 'react'
import CardComponent from 'components/CardComponent'
import { Col, Container, Row } from 'reactstrap'

import 'css/Gallery.css'

import GalleryImages from 'SITE_DATA/GALLERY.js'

const Gallery = () => {
    const galleryImages = GalleryImages()
    return (
        <Container>
            <Row>
                {galleryImages.map((image) => (
                    <Col
                        xl='3'
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
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Gallery
