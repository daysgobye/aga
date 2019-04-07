import React, { Component } from "react";
import "./mc_sign_up.sass";
class McSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=5570e70c892eb456778ed4891&amp;id=4a1da8f358"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL" className="visuallyhidden">
                Email Sign up
              </label>
              <input
                type="email"
                placeholder="enter your email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_41168e28eedca43c895480f3c_6571b3ed67"
                tabIndex={-1}
                defaultValue
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Sign Up"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default McSignUp;
