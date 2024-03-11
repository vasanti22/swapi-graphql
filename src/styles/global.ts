import {createGlobalStyle} from "styled-components"
import styled from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}
#root{
    margin:0 auto;
}
`

export const Text = styled.p<{ $detailsPage?: boolean; }>`
font-size: 1rem;
font-weight: 400;
line-height: 1.5rem;
word-wrap: break-word;
color: ${props => props.$detailsPage ? "white" : "#000"};
margin: 1rem 0;
`

export const Section = styled.section`
width:80%;
margin: 0 auto;
padding: 1rem;
`

export const HeaderContainer = styled.header`

display: flex;
justify-content:space-evenly;
align-items: center;
padding: 1rem;

nav a {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 10px;
    
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

export const CardContainer = styled.div`
flex-basis: 30%;
background-color: #ffc107;
outline: 4px solid #000;
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
background-color: rgba(0, 0, 0, 0.8);
color: #fff;
margin: 1rem auto 0;
`
export const CharacterList = styled.ul`
columns: 3;
-webkit-columns: 3;
-moz-columns: 3;

a { 
    color: #fff;
    display: inline-block;
    padding: 0.7rem;
    background: rgb(255 232 31 / 20%);
    margin: 0.4rem;
}

& a:hover {
    color: #ffc107;
}

`