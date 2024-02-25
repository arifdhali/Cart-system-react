import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <figure className="logo">
        <img src={Logo} alt="Logo" />
      </figure>
      <ul className="menu-items">
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
