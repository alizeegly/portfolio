import React from 'react'
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Alizée</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavbarContainer>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about-me">A propos de moi</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="experiences">Expériences</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="formations">Formations</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects">Mes projets</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Me contacter</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
