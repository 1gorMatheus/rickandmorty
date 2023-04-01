import { HeaderStyle } from "./HeaderStyle";
import RickandMorty from './Rick-and-Morty.png'
function Header() {
    return ( 
    <HeaderStyle>
    <img src={RickandMorty} alt="Rick and Morty" />
   <h1><a href="/">Home</a></h1> 
   
    </HeaderStyle> 
    );
}

export default Header;