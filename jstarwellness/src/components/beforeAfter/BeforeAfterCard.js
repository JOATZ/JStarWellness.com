import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap'

const BeforeAfterCard = ({ headline, author, content, src }) => (
    <Card className='before-after-card'>
        <CardImg top src={src} alt={`Before and After ${headline}`} />
        <CardBody>
            <CardTitle tag='h5'>{headline}</CardTitle>
            <CardText>{content}</CardText>
            <CardFooter>{author}</CardFooter>
        </CardBody>
    </Card>
)

export default BeforeAfterCard
