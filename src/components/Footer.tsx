import { FC } from 'react'
import { FooterContainer } from '../styles/global'
import { FaGithub,FaLinkedin } from "react-icons/fa";

const Footer: FC = () => {
    const today = new Date();
    const year = today.getFullYear();  
    return (
    <FooterContainer>
        <p>Developed by VP &copy; {year}</p>
        <a href="https://github.com/vasanti22/swapi-graphql"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/vasanti-p-82484a64"><FaLinkedin size={30} /></a>
    </FooterContainer>
  )
}

export default Footer