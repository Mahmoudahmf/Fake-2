import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/home">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              shopping cart
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/ProductDetails">
              Details
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Login">
              Login
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Admin">
              Admin
            </NavLink>
          </li>
        </ul>

        <div />
        {/* <span className="badge badge-primary">{props.productCount}</span> */}
      </div>
    </nav>
  );
};

export default Navbar;
