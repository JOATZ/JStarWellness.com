import { useState } from 'react'
import Logo from 'app/assets/img/logo.webp'
import {
    FaAddressCard,
    FaCamera,
    FaEnvelope,
    FaFacebookSquare,
    FaHome,
    FaInfoCircle,
    FaInstagramSquare,
    FaList,
    FaPhoneAlt,
    FaTwitterSquare
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
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

import 'components/Header/Header.css'
/*MOVE TOGGLER! and set bg color*/
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Navbar dark sticky='top' expand='lg'>
            <Container>
                <Row className='top-panel-row d-none d-lg-flex'>
                    <Col className='top-panel'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+18052687565'
                        >
                            <FaPhoneAlt /> 1-805-268-7565
                        </a>
                        |
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:Stepup2shapeup@gmail.com'
                        >
                            <FaEnvelope /> Stepup2shapeup@gmail.com
                        </a>
                    </Col>
                    <Col className='top-panel text-end' lg={{ size: 3 }}>
                        <a
                            href='https://facebook.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='me-2'
                        >
                            <FaFacebookSquare />
                        </a>
                        <a
                            href='http://www.instagram.com/gotyoucovered805'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='me-2'
                        >
                            <FaInstagramSquare />
                        </a>
                        <a
                            href='https://twitter.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='me-2'
                        >
                            <FaTwitterSquare />
                        </a>
                    </Col>
                </Row>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <NavbarBrand href='/' className='d-flex pt-3'>
                        <img
                            src={Logo}
                            alt='JStar Logo'
                            className='float-start'
                        />
                        <h1 className='mt-1'>JStar Wellness</h1>
                    </NavbarBrand>

                    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

                    <Collapse isOpen={menuOpen} navbar>
                        <Nav className='ms-auto' navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <FaHome />
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/services'>
                                    <FaList /> Services
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/gallery'>
                                    <FaCamera /> Gallery
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/about'>
                                    <FaInfoCircle /> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contact'>
                                    <FaAddressCard />
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header
