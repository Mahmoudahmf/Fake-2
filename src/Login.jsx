import React, { Component } from "react";

import Joi from "joi-browser";

class Login extends Component {
  state = {
    userName: "",
    passWord: "",
    errors: {},
  };
  //   userName=React.createRef();

  schema = {
    userName: Joi.string().required(),
    passWord: Joi.string().required(),
  };

  handelSubmit = (e) => {
    e.preventDefault();
    // validate
    const errors = this.validate();
    if (errors) return;

    //Call backEnd
    console.log("Submit");

    //const userName = this.userName.current.value;
    console.log(this.state);
  };

  validate = () => {
    const errors = {};

    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }

    this.setState({ errors });
    // if (this.state.userName.trim() === "")
    //   errors.userName = "User Name is Required ";
    // if (this.state.passWord.trim() === "")
    //   errors.passWord = "PassWord is Required ";
    // this.setState({ errors });

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  hadleChange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group ">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              User Name
            </label>
            <input
              name="userName"
              placeholder="User Name"
              // ref={this.userName}
              onChange={this.hadleChange}
              value={this.state.userName}
              autoFocus
              type="text"
              className="form-control"
              id="staticEmail"
            />
            {this.state.errors.userName && (
              <div className="alert  alert-danger">
                {this.state.errors.userName}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">
              Password
            </label>
            <input
              name="passWord"
              value={this.state.passWord}
              onChange={this.hadleChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            {this.state.errors.passWord && (
              <div className="alert  alert-danger">
                {this.state.errors.passWord}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default Login;
