import React from 'react'
import { Link } from 'react-router-dom'
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
    to,
    imgPosition,
    cardClassName = '',
    cardBodyChildren = null
}) => {
    const isLink = to && !onButtonClick

    const buttonProps = {
        className: buttonClassName,
        style: { position: 'relative', width: '100%' },
        ...(isLink ? { tag: Link, to: to } : { onClick: onButtonClick })
    }

    const renderCardContent = () => (
        <>
            {buttonLabel && (onButtonClick || to) && (
                <Button {...buttonProps}>{buttonLabel}</Button>
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
