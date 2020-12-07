import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from '../Navbar/NavbarElements'
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>Alizée</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about-me" smooth={true} duration={500} spy={true} exact='true' offset={-80}>À propos de moi</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="experiences" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Expériences</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="training" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Formations</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Mes projets</NavLinks>
                            </NavItem>
                            <NavBtn>
                                <NavBtnLink to="contact">ME CONTACTER</NavBtnLink>
                            </NavBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
