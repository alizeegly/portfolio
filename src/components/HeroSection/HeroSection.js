import React, {useState} from 'react'
import { ArrowLeft, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import {Button} from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    const showCV = () => {
		window.open("http://alizeegillouaye.com/alizee_gillouaye_cv.pdf")
	};

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src="http://alizeegillouaye.com/videos/video.mp4" type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Alizée Gillouaye</HeroH1>
                <HeroP>
                    Apprentie Développeuse Web
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="cv" onClick={showCV} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                        Télécharger mon CV {hover ? <ArrowLeft/> : ""}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
