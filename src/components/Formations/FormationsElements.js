import styled from 'styled-components'

export const ExperiencesContainer = styled.div`
    height: calc(100vh - 80px);
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ExperiencesH1 = styled.h1`
    font-size: 2.5rem;
    color: #020102;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ExperiencesWrapper = styled.div`
    width: 90%;
    height: 80%;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 600px){
        height: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Bloc = styled.div`
    width: ${ ({width}) => (width ? '30%' : '70%') };
    /*background: ${ ({width}) => (width ? 'red' : 'blue') };*/
    margin-top: 50px;
    
    @media screen and (max-width: 550px){
        margin: 0 auto;
    }
`

export const Experience = styled.div`
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    align-items: space-between;
    flex-direction: column;
`

export const Titre = styled.h2`
    text-transform: uppercase;
    color: #020102;
    font-weight: bold;
    width: 150px;
    padding-bottom: 10px;
    border-bottom: 5px solid #8E2E1D;
    margin-bottom: 100px;

    @media screen and (max-width: 550px){
        width: 150px;
        text-align: center;
        margin-top: -100px;
    }
`

export const JobName = styled.h3`
    color: #020102;
    font-size: 24px;
    font-weight: bold;
`

export const Dates = styled.p`
    font-size: 16px;
    color: #C0BFC0;
`

export const CompanyName = styled.p`
    font-style: italic;
    font-size: 16px;
    color: #C0BFC0;
`

export const Description = styled.p`
    font-size: 14px;
    color: #C0BFC0;
    width: 80%;
    text-align: justify;
    margin-top: 10px;
`