import React from 'react'
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from '../Navbar/NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Alizée</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about-me">À propos de moi</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experiences">Expériences</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="training">Formations</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Mes projets</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/contact">ME CONTACTER</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
