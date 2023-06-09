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
      <Link to="/Cards" className="nav-menu">
        Cards
      </Link>
      <Link to="/CounterPro" className="nav-menu">
        UseState
      </Link>
      <Link to="/Score" className="nav-menu">
        Score  
      </Link>
      <Link to="/Project" className="nav-menu">
        Project  
      </Link>
    </div>
    </>
  );
}

export default Navbar;
