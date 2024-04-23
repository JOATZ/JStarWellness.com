import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap'

const CardComponent = ({
    title,
    content,
    src,
    altText,
    footerContent,
    buttonClassName,
    buttonLabel,
    onButtonClick,
    imgTop = true,
    cardClassName = '',
    cardBodyChildren = null
}) => (
    <Card className={`custom-${cardClassName}`}>
        {imgTop && src && <CardImg top src={src} alt={altText} />}
        {buttonLabel && onButtonClick && (
            <Button
                className={buttonClassName}
                onClick={onButtonClick}
                style={{ position: 'relative', width: '100%' }}
            >
                {buttonLabel}
            </Button>
        )}
        <CardBody>
            {title && <CardTitle tag='h5'>{title}</CardTitle>}
            {content && <CardText>{content}</CardText>}
            {cardBodyChildren}
            {footerContent && <CardText>{footerContent}</CardText>}
        </CardBody>

        {!imgTop && src && <CardImg bottom src={src} alt={altText} />}
    </Card>
)

export default CardComponent
