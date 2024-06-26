import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap'

const SubHeader = ({ current, detail }) => {
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/' aria-label='home'>
                            Home
                        </Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/directory' aria-label='directory'>
                                Directory
                            </Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <h2>{current}</h2>
                <hr />
            </Col>
        </Row>
    )
}

export default SubHeader
