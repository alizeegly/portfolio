import React from 'react'
import { Button } from 'react-scroll'
import { ExperiencesContainer, ExperiencesH1, ExperiencesWrapper, Bloc, Experience, JobName, Titre, Dates, CompanyName, Description } from './FormationsElements'

const Experiences = ( {resumeData} ) => {
    return (
        <>
            <ExperiencesContainer id="training">
                {/* <ExperiencesH1>Mes Expériences</ExperiencesH1> */}
                <ExperiencesWrapper>
                    <Bloc width="true">
                        <Titre>Formation</Titre>
                    </Bloc>
                    <Bloc>
                        { 
                            resumeData.education.map((item) => (
                                <Experience key={item.Achievements}>
                                    <JobName key={item.Achievements}>{item.Achievements}</JobName>
                                    <Dates key={item.specialization}>{item.specialization}</Dates>
                                    <CompanyName key={item.YearOfPassing}>{item.YearOfPassing} &#8226; {item.place}</CompanyName>
                                    <Description key={item.UniversityName}>{item.UniversityName}</Description>
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
