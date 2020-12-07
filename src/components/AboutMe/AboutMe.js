import React from 'react'
import { Button } from '../ButtonElements'
import { 
    Column2, 
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    Img
} from './AboutElements'

const AboutMe = ( {resumeData} ) => {
    const showCV = () => {
		window.open("http://alizeegillouaye.com/alizee_gillouaye_cv.pdf")
    };
    
    return (
        <>
            <InfoContainer id="about-me">
                <InfoWrapper>
                    <InfoRow imgStart="true">
                        <Column1>
                            <TextWrapper>
                                <TopLine>À propos de moi</TopLine>
                                <Heading lightTextHeading="true">{resumeData.role}</Heading>
                                <Subtitle>{resumeData.aboutme}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" onClick={showCV} smooth={true} duration={500} spy={true} exact="true" offset={-80} primary="true">Télécharger mon CV</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={resumeData.imagebaseurl} alt="Moi" />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default AboutMe
