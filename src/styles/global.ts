import {createGlobalStyle} from "styled-components"
import styled from 'styled-components'
import StarWarsBg from '../assets/img/star-wars-bg.jpg'
import { devices } from './breakpoints'

export const GlobalStyles = createGlobalStyle`
*{
    font-size: 14px;
    color: inherit;
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;

    body {
        background: url(${StarWarsBg}) top center #000;
    }
}
#root{
    margin:0 auto;
}
`

export const Text = styled.p<{ $detailsPage?: boolean; }>`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5rem;
    word-wrap: break-word;
    color: ${props => props.$detailsPage ? "white" : "#000"};
    margin: 1rem 0;
`

export const Transition = styled.div`
    transition: outline 1s ease 0s;
    a {
        padding: 1rem;
        display: block;
        text-align: center;
    }
    &:hover{
        box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.3);
        outline: 10px solid #ffc107;
    }  
`

export const Section = styled.section`
    width:80%;
    margin: 0 auto;
    padding: 1rem;
    @media ${devices.sm} {
        width: 90%;
    }
`

export const HeaderContainer = styled.header`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    padding: 1rem;
    flex-direction: row;

    nav a {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0 10px;
        color: #fff;
        
        &:hover{
            color: #ffc107;
        }
        
    }
` 

export const Container = styled(Section)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`

export const CardContainer = styled(Transition)`
    flex-basis: 30%;
    outline: 3px solid #000;
    a {
        background-color: rgb(255 193 0 / 54%);
    }
    @media ${devices.sm} {
        flex-basis: 100%;
    }
` 
export const Heading = styled.span<{ $detailsPage?: boolean; }>`
    font-weight: 600;
    display: block;
    margin: 0.5rem 0;
    color: ${props => props.$detailsPage ? "white" : "#000"};

    span {
        color: ${props => props.$detailsPage ? "#ffc107" : "#000"};
    }
`

export const H1 = styled(Heading)`
    font-size: 1.5rem;
    color: ${props => props.$detailsPage ? "#ffc107" : "#000"};
`
export const H2 = styled(Heading)`
    font-size: 1.3rem;
`
export const H3 = styled(Heading)`
    font-size: 1.1rem;
    &:after {
        content: "";
        width: 100%;
        display: block;
        margin: 1rem 0;
        border-bottom: ${props => props.$detailsPage ? "1px solid rgb(255 255 255 / 27%)" : "none" }
    }
`

export const H4 = styled(Heading)`
    font-size: 0.9rem;
`
export const DetailsContainer = styled(Section)`
    background-color: rgb(26 25 25 / 68%);
    color: #fff;
    margin: 1rem auto 0;
`
export const Lists = styled.ul`
    columns: 3;
    -webkit-columns: 3;
    -moz-columns: 3;
        a { 
            display: inline-block;
            padding: 0.7rem;
            background:  #ffc107;
            margin: 0.4rem;
            border-radius: 10px;
            font-weight: 600;
        }

        & a:hover {
            color: #000;
        }
    @media ${devices.sm} {
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
    }
`
export const CharactersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
    background-color: rgb(26 25 25 / 68%);
    padding: 4rem 0;
`
export const CharactersList = styled.div`
    background-color: #ffc107;
    flex-basis: 20%;
    text-align: center;
    border-radius: 10px;
    transition: 1s ease 0s;
    a {
        display: inline-block;
        font-weight: 600;
        padding: 0.5rem;
        width: 100%;
    }
    &:hover {
        transform: translateY(-0.25em);
    }
    @media ${devices.sm} {
        flex-basis: 50%;
    }
    
`

export const Button = styled.button`
    display: inline-block;
    padding: 0.8rem 1rem;
    border: 0;
    color: #ffc107;
    border: 2px solid #ffc107;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.25s ease 0s;
    background-color: #000;

    &:hover {
        transform: translateY(-0.25em);
    }
`

export const FooterContainer = styled.footer`
    padding: 2rem 1rem;
    font-size: 1.3rem;
    color:#fff;
    text-align: center;

    a{
        display: inline-block;
        margin: 1rem .5rem;
    }
    & a svg:hover {
        fill: #ffc107;
    } 
`