import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about-me" onClick={toggle}>A propos de moi</SidebarLink>
                    <SidebarLink to="experiences" onClick={toggle}>Expériences</SidebarLink>
                    <SidebarLink to="training" onClick={toggle}>Formations</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Mes projets</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="contact" onClick={toggle}>Me Contacter</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
