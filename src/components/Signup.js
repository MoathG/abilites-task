import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: ""
    };

    this.validator = new SimpleReactValidator({
      element: message => <div className="text-danger m-0">{message}</div>,
      validators: {
        match: {
          message: "Do not match the password.",
          rule: val => val === this.state.password
        }
      }
    });
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    if (this.validator.allValid()) {
      // console.log("done");
    } else {
      // console.log("error");
      this.validator.showMessages();
      this.forceUpdate();
    }

    console.log("malna");
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-container mx-auto">
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                className="form-control"
                onChange={this.changeHandler}
              />
              {this.validator.message(
                "firstName",
                this.state.firstName,
                "required|alpha_space"
              )}
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                className="form-control"
                onChange={this.changeHandler}
              />
              {this.validator.message(
                "lastName",
                this.state.lastName,
                "required|alpha_space"
              )}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={this.state.email}
                className="form-control"
                onChange={this.changeHandler}
              />
              {this.validator.message(
                "email",
                this.state.email,
                "required|email"
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                className="form-control"
                placeholder="Password"
                onChange={this.changeHandler}
              />
              {this.validator.message(
                "password",
                this.state.password,
                "required"
              )}
            </div>

            <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              className="form-control"
              placeholder="Retype password"
              onChange={this.changeHandler}
            />
            {this.validator.message(
              "confirm",
              this.state.confirm,
              "required"
            )}
          </div>

            <div className="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Primary
              </button>
              <small>
                <Link to={"/sign-in"}>Already have an account</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
