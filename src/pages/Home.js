import React, {useState} from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import resumeData from '../components/Data'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Experiences from '../components/Experiences/Experiences'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <AboutMe resumeData={resumeData}/>
            <Experiences resumeData={resumeData}/>
        </>
    )
}

export default Home
