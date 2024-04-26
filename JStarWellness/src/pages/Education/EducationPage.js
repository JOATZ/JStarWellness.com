import React, { useState } from 'react'
import CardComponent from 'components/CardComponent'
import {
    Col,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from 'reactstrap'

import EDUCATION from './EDUCATION'

import './EducationPage.css'

const EducationPage = () => {
    const [modal, setModal] = useState(false)
    const [currentArticle, setCurrentArticle] = useState({})

    const toggleModal = () => setModal(!modal)

    const readArticle = (article) => {
        setCurrentArticle(article)
        toggleModal()
    }
    return (
        <Container>
            <Row>
                <Col className='education-intro-col mt-3'>
                    <h2>Education</h2>
                </Col>
            </Row>
            <Row className='justify-content-center' noGutters>
                {EDUCATION.map((article) => (
                    <Col
                        lg='4'
                        key={article.id}
                        className='custom-article-item-col'
                    >
                        <CardComponent
                            cardClassName='article-item-card'
                            title={article.title}
                            content={article.content}
                            footerContent={`By: ${article.author} - ${new Date(
                                article.date
                            ).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}`}
                            src={article.src}
                            altText={`Article: ${article.title}`}
                            onButtonClick={() => readArticle(article)}
                            buttonLabel='Read'
                            buttonClassName='read-article-btn'
                        />
                    </Col>
                ))}
            </Row>
            <Modal isOpen={modal} toggle={toggleModal} size='lg'>
                <ModalHeader toggle={toggleModal}>
                    {currentArticle.title}
                </ModalHeader>
                <ModalBody className='modal-article-content'>
                    {currentArticle.content}
                </ModalBody>
                <ModalFooter>
                    {currentArticle.author} -{' '}
                    {new Date(currentArticle.date).toLocaleDateString()}
                </ModalFooter>
            </Modal>
        </Container>
    )
}

export default EducationPage
