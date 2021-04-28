import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, Navbtn, NavbtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Aarabhya</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItems>
                        <NavLinks to="home">Home</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="about">About Us</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="contact">Contact Us</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItems>
                </NavMenu>
                <Navbtn>
                    <NavbtnLink to='/signin'>Sign In</NavbtnLink>
                </Navbtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar