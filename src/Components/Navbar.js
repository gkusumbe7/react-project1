import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar(){
    return(
      <> 
      <div className="nav-container">
      <Link to="/" className="nav-menu">
        Home
      </Link>
      <Link to="/Login" className="nav-menu">
        Login
      </Link>
      <Link to="/Contact" className="nav-menu">
        Contact
      </Link>
      <Link to="/Chocolate" className="nav-menu">
        Chocolate
      </Link>
    </div>
    </>
  );
}

export default Navbar;
