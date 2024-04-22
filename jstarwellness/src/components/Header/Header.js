import { useState } from 'react'
import LogoImg from 'app/assets/JStarRqlapf.png'
import { BsFillPatchExclamationFill } from 'react-icons/bs'
import {
    FaAddressCard,
    FaCamera,
    FaHome,
    FaInfoCircle,
    FaList
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import {
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from 'reactstrap'

import TopPanel from './TopPanel'

import 'components/Header/Header.css'
/*MOVE TOGGLER! and set bg color*/
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <Container fluid className='top-panel-container d-none d-lg-flex'>
                <TopPanel />
            </Container>
            <Navbar dark sticky='top' expand='lg'>
                <NavbarBrand href='/' className='ms-5'>
                    <img
                        src={LogoImg}
                        className='float-start'
                        alt='JStar Logo'
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
                            <NavLink className='nav-link' to='/testimonials'>
                                <BsFillPatchExclamationFill />
                                Testimonials
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
            </Navbar>
        </>
    )
}

export default Header
