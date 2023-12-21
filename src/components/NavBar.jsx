import "../assets/css/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="center-margin">
      <nav className="nav">
        <h1>
          <span className="accent">Prosperity</span> Trust Bank
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
