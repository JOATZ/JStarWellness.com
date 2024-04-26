import { useState } from 'react'
import LogoImg from 'app/assets/JStarRqlapf.webp'
import { BsFillPatchExclamationFill } from 'react-icons/bs'
import {
    FaAddressCard,
    FaBrain,
    FaCamera,
    FaHome,
    FaInfoCircle,
    FaList
} from 'react-icons/fa'
import {
    FaEnvelope,
    FaFacebookSquare,
    FaInstagramSquare,
    FaPhoneAlt,
    FaTwitterSquare
} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import {
    Col,
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Row
} from 'reactstrap'

import 'css/Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <Container fluid className='top-panel-container d-none d-lg-flex'>
                <Row className='top-panel-contents'>
                    <Col className='top-panel'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+18052687565'
                            aria-label='Call us'
                        >
                            <FaPhoneAlt /> 1-805-268-7565
                        </a>
                        |
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:Stepup2shapeup@gmail.com'
                            aria-label='Email us'
                        >
                            <FaEnvelope /> Stepup2shapeup@gmail.com
                        </a>
                    </Col>
                    <Col className='top-panel text-end'>
                        <a
                            href='https://facebook.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='me-2'
                            aria-label='Visit our Facebook page'
                        >
                            <FaFacebookSquare />
                        </a>
                        <a
                            href='http://www.instagram.com/gotyoucovered805'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='me-2'
                            aria-label='Visit our Instagram page'
                        >
                            <FaInstagramSquare />
                        </a>
                        <a
                            href='https://twitter.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='me-2'
                            aria-label='Visit our Twitter page'
                        >
                            <FaTwitterSquare />
                        </a>
                    </Col>
                </Row>
            </Container>
            <Navbar dark sticky='top' expand='xl'>
                <NavbarBrand className='ms-5'>
                    <Link to='/' aria-label='J Star Wellness Home'>
                        <img
                            src={LogoImg}
                            className='float-start'
                            alt='JStar Logo'
                        />
                        <h1 className='mt-1'>JStar Wellness</h1>
                    </Link>
                </NavbarBrand>

                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink
                                className='nav-link'
                                to='/'
                                aria-label='Home'
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaHome />
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className='nav-link'
                                to='/services'
                                aria-label='View services'
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaList /> Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className='nav-link'
                                to='/education'
                                aria-label='View education'
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaBrain /> Education
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className='nav-link'
                                to='/gallery'
                                aria-label='View gallery'
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaCamera /> Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className='nav-link'
                                to='/testimonials'
                                aria-label='View testimonials'
                                onClick={() => setMenuOpen(false)}
                            >
                                <BsFillPatchExclamationFill />
                                Testimonials
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className='nav-link'
                                to='/about'
                                aria-label='About JStar Wellness'
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaInfoCircle /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className='nav-link'
                                to='/contact'
                                aria-label='View contact information'
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaAddressCard />
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header
