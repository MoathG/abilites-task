import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.validator = new SimpleReactValidator({
      element: message => <div className="text-danger m-0">{message}</div>
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
      console.log(this.state);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-container mx-auto">
          <form onSubmit={this.submitHandler}>
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
              <button type="submit" className="btn btn-primary btn-block">
                Primary
              </button>
              <small>
                <Link to={"/sign-up"}>Create new account</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
