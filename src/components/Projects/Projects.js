import React from 'react'
import {ProjectsContainer, ProjectsH1, CardsContainer} from './ProjectsElements'
import CardItem from './CardItem'

const Projects = ( {resumeData} ) => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Mes projets</ProjectsH1>
            <CardsContainer>
                { 
                    resumeData.portfolio.map((item) => (
                        <CardItem
                            src='http://alizeegillouaye.com/images/img-9.jpg'
                            text={item.description}
                            label={item.name}
                            path='/services'
                            technics={item.technics}
                        />
                    ))
                }
            </CardsContainer>
        </ProjectsContainer>
    )
}

export default Projects


