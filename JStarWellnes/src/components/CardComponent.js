import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Row
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
    imgPosition,
    cardClassName = '',
    cardBodyChildren = null
}) => {
    const renderCardContent = () => (
        <>
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
        </>
    )
    return (
        <Card className={`custom-${cardClassName}`}>
            {imgPosition === 'top' && src && (
                <CardImg top src={src} alt={altText} />
            )}
            {imgPosition !== 'start' && renderCardContent()}
            {imgPosition === 'start' && src && (
                <Row noGutters>
                    <Col md={4}>
                        <CardImg src={src} alt={altText} />
                    </Col>
                    <Col md={8}>{renderCardContent()}</Col>
                </Row>
            )}
            {imgPosition === 'bottom' && src && (
                <CardImg bottom src={src} alt={altText} />
            )}
        </Card>
    )
}

export default CardComponent
