import "./Navbar.css"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return <header>
        <nav className="navigation">

        <div className="nav-header">
          <h1 className="logo">MWEBX</h1>

          <button onClick={() => setShowMenu(!showMenu) }>
          <GiHamburgerMenu className="hamburger-icon"/>
        </button>
       
        </div>
    
       
    <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>

    <div className="nav-list">
    <NavLink to="/" className={ ({isActive}) =>
          isActive ? "activeLink link" :  "nonactiveLink link"
        } >Domů</NavLink>
        
    <NavLink to="/movies"  className={ ({isActive}) =>
          isActive ? "activeLink link" :  "nonactiveLink link"
        }>Produkty</NavLink>


    <NavLink to="/serials"  className={ ({isActive}) =>
          isActive ? "activeLink link" :  "nonactiveLink link"
        }>Balíčky</NavLink>
    </div>

    </div>

   
        

        </nav>
        {/* místo na logo nebo img */}
        

  </header>
  
}

export default Navbar