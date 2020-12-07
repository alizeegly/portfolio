import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    /*height: calc(100vh - 80px);*/
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    color: white;

    
`

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    background: red;

    @media screen and (max-width: 1000px){
        grid-template-colums: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`

export const Card = styled.div`
    width: 20%;
    display: flex;
    margin: 0 1rem;
    margin-bottom: 40px;
    border-radius: 10px;

    @media screen and (max-width: 1164px){
        width: 26%;
    }

    @media screen and (max-width: 935px){
        width: 40%;
    }

    @media screen and (max-width: 700px){
        width: 60%;
    }

    @media screen and (max-width: 570px){
        width: 80%;
    }
`

export const CardImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;

    &:hover {
        transform: scale(1.1);
    }
`

export const Figure = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    padding-top: 67%;
    overflow: hidden;

    &::after {
        content: attr(data-category);
        position: absolute;
        bottom: 0;
        margin-left: 10px;
        padding: 6px 8px;
        max-width: calc((100%) - 60px);
        background-color: #fff;
        box-sizing: border-box;
        font-size: 15px;
        font-weight: 700;
        color: #8E2E1D;
        text-transform: uppercase;
    }
`

export const BlocTitre = styled.div`
    padding: 20px 30px 30px;
    background: white;
`

export const CardTitre = styled.div`
    color: #252e48;
    font-size: 14px;
    line-height: 24px;
    height: 70px;
    overflow: scroll;
`

export const CardTags = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
`

export const CardTechnics = styled.h6`
    background: #8E2E1D;
    color: #fff;
    padding: 5px 12px;
    border-radius: 3px;
    margin-right: 10px;
    font-weight: 400;
`