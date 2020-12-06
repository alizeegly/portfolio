import React, {useState} from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import { homeObjOne } from '../components/AboutMe/Data'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

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
            <AboutMe {...homeObjOne}/>
        </>
    )
}

export default Home
