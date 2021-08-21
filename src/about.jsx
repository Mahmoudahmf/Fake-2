import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import Company from "./Company";
import Team from "./Team";
class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>About page</h1>

        <div className="row">
          <div className="col-3">
            <ul>
              <li>
                <Link to="/about/Company">Our Company</Link>
              </li>
              <li>
                <Link to="/about/Team"> Our Team</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <Route path="/about/Company" Component={Company}></Route>

            <Route path="/about/Team" component={Team}></Route>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
