import { NavLink } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Services from "../pages/services";

function Navbar () {
    return(
        <nav className="navbar">
            <div className="nav-container">
                <NavLink to="/" className={({isActive}) =>
            (isActive ? "active-link" : "") }>
                Home
            </NavLink>
             <NavLink to="/about" className={({isActive}) =>
            (isActive ? "active-link" : "") }>
                About
            </NavLink>
             <NavLink to="/services" className={({isActive}) =>
            (isActive ? "active-link" : "") }>
                Services
            </NavLink>
            </div>
        </nav>
        
    );
}
export default Navbar;