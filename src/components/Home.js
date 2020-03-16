import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    console.log(this.props.location.data);

    // Axios.get("/login").then(res => {
    //   console.log(res);
    //   this.setState({ users: res.data });
    // });
  }

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <div className="container-fluid">
        <div className="card">
          <img
            src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            alt="moath"
          />
          <h1>
            {firstName} {lastName}
          </h1>
          <p className="title">{email}</p>
          <p>welcome to my profile page</p>
        </div>
      </div>
    );
  }
}

export default Home;
