import { Link } from "react-router-dom";

function Navbar () {
    return(
        <div className="nav">
            <ul className="navlist">
                <Link to="/">Home</Link>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>            </ul>
        </div>
    )
}

export default Navbar;