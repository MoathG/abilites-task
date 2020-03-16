import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="profile-container mx-auto">
          <h3>Hello Moath Gharib</h3>
          <p>your email address</p>
        </div>
      </div>
    );
  }
}

export default Home;
