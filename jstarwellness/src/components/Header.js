import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Col,
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Row
} from 'reactstrap'

import Logo from '../app/assets/img/logo.webp'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <div className='top-panel'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+18052687565'
                        >
                            <i className='fa fa-phone' />
                            1-805-268-7565
                        </a>
                        |
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:Stepup2shapeup@gmail.com'
                        >
                            <i className='fa fa-envelope-o' />
                            Stepup2shapeup@gmail.com
                        </a>
                    </div>
                </Col>
            </Row>
            <Navbar dark sticky='top' expand='md'>
                <NavbarBrand className='ms-5' href='/'>
                    <img src={Logo} alt='JStar Logo' className='float-start' />
                    <h1 className='mt-1'>JStar Wellness</h1>
                </NavbarBrand>

                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home ha-lg' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/services'>
                                <i className='fa fa-list fa-lg' /> Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/gallery'>
                                <i className='fa fa-list fa-lg' /> Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>
                                <i className='fa fa-info fa-lg' /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fa fa-address-card fa-lg' />{' '}
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header
