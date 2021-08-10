import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href = "/">
          Navbar
        </a>
        <span className="badge badge-primary">3</span>
      </nav>
    );  
  }
}

export default Navbar;
