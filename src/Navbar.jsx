import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              shopping cart
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/ProductDetails">
              Details
            </Link>
          </li>
        </ul>

        <div />
        {/* <span className="badge badge-primary">{props.productCount}</span> */}
      </div>
    </nav>
  );
};

export default Navbar;
