import React from 'react'
import { Button } from 'react-scroll'
import { ExperiencesContainer, ExperiencesH1, ExperiencesWrapper, Bloc, Experience, JobName, Titre, Dates, CompanyName, Description } from './ExperiencesElements'

const Experiences = ( {resumeData} ) => {
    return (
        <>
            <ExperiencesContainer id="experiences">
                {/* <ExperiencesH1>Mes Expériences</ExperiencesH1> */}
                <ExperiencesWrapper>
                    <Bloc width="true">
                        <Titre>Expériences</Titre>
                    </Bloc>
                    <Bloc>
                        { 
                            resumeData.work.map((item) => (
                                <Experience key={item.job}>
                                    <JobName key={item.job}>{item.job}</JobName>
                                    <Dates key={item.from}>{item.from} - {item.to}</Dates>
                                    <CompanyName key={item.CompanyName}>{item.CompanyName} &#8226; {item.place}</CompanyName>
                                    <Description key={item.description}>{item.description}</Description>
                                </Experience>
                            ))
                        }
                    </Bloc>
                </ExperiencesWrapper>
            </ExperiencesContainer>
        </>
    )
    
}

export default Experiences
