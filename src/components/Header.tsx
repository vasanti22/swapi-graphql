import { FC } from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../assets/img/logo.svg';
import { HeaderContainer } from '../styles/global';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Link to="/"><img alt="Logo" src={Logo} /></Link>  
      <nav>
        <Link to="/">Films</Link>
        <Link to="/allcharacters">All Characters </Link>
      </nav>
    </HeaderContainer>
    )
  }
  
  export default Header;
  
  
  