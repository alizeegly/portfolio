import React, {useState} from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import resumeData from '../components/Data'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Experiences from '../components/Experiences/Experiences'
import Formations from '../components/Formations/Formations'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

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
            <Formations resumeData={resumeData}/>
            <Projects resumeData={resumeData}/>
            {/* <Contact resumeData={resumeData}/> */}
            <Footer resumeData={resumeData}/>
        </>
    )
}

export default Home
