import "../styles/Nav.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="logo"></div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/coffee">Coffee</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login">
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Nav;
