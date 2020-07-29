import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./notification.sass";
import xClose from "../../images/x-close-icon.svg";
class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldShow: false, notificationText: "" };
  }

  componentDidMount() {
    fetch(`https://pa.purpleandbold.net/wp-json/wp/v2/pages/219`)
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        const notification = res.acf.notification;
        if (notification.show && notification.notification_text !== "") {
          this.setState({
            shouldShow: true,
            notificationText: notification.notification_text,
          });
        }
      });
  }
  render() {
    return (
      <CSSTransition
        in={this.state.shouldShow}
        timeout={300}
        classNames="notifi"
        unmountOnExit
      >
        <div>
          <div className="notification">
            <div className="notification__text">
              <p>{this.state.notificationText}</p>
            </div>

            {/* <div className="notification__close">
              <button onClick={() => this.setState({ shouldShow: false })}>
                <img src={xClose} alt="close icon" />
              </button>
            </div> */}
          </div>
          <div className="filler"></div>
        </div>
      </CSSTransition>
    );
  }
}

export default Notification;
