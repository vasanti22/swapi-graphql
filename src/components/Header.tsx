import { FC } from 'react';
import { Link } from 'react-router-dom'; 
//import Logo from '../assets/logo.svg';

const Header: FC = () => {
  return (
    <header>
		<nav>
			<Link to="/">Films</Link>
			<Link to="/allcharacters">All Characters </Link>
		</nav>
    </header>
    )
  }
  
  export default Header;
  
  
  