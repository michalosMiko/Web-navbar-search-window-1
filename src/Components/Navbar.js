import "./Navbar.css"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  return <header>
        <nav>
        <NavLink to="/" className={ ({isActive}) =>
          isActive ? "activeLink link" :  "nonactiveLink link"
        } >Domů</NavLink>
        
    <NavLink to="/movies"  className={ ({isActive}) =>
          isActive ? "activeLink link" :  "nonactiveLink link"
        }>Filmy</NavLink>


    <NavLink to="/serials"  className={ ({isActive}) =>
          isActive ? "activeLink link" :  "nonactiveLink link"
        }>Seriály</NavLink>
    
        </nav>
        {/* místo na logo nebo img */}
  </header>
  
}

export default Navbar