import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = ( {resumeData} ) => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Menu</FooterLinkTitle>
                            <FooterLink to="about-me">À propos de moi</FooterLink>
                            <FooterLink to="experiences">Expériences</FooterLink>
                            <FooterLink to="training">Formations</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Mes projets</FooterLinkTitle>
                            { 
                                resumeData.portfolio.map((item) => (
                                    <FooterLink to="projects" key={item.name}>{item.name}</FooterLink>
                                ))
                            }
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Alizée Gillouaye</SocialLogo>
                        <WebsiteRights>{new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/alizee-gillouaye/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/https://github.com/alizeegly" target="_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/alizee.gillouaye" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/alizee_gly/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
