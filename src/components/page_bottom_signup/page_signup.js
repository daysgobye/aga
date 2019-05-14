import React, { Component } from "react";
import McSignUp from "../mc_sign_up/mc_sign_up";
import "./page_signup.sass";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page__sign">
        <hr />
        <h3>Join Our Newsletter</h3>
        <p>
          Sign up below to receive updates from The Pastry Academy by Amaury
          Guichon.
        </p>
        <McSignUp />
      </div>
    );
  }
}

export default Signup;
