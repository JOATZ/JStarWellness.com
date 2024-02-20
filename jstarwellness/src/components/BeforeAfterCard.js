import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

const BeforeAfterCard = ({ headline, author, content, src }) => (
    <Card>
        <CardImg
            top
            width='100%'
            src={src}
            alt={`Before and After ${headline}`}
        />
        <CardBody>
            <CardTitle tag='h5'>{headline}</CardTitle>
            <CardText>{author}</CardText>
            <CardText>{content}</CardText>
        </CardBody>
    </Card>
)

export default BeforeAfterCard
