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
    const prevNotification = localStorage.getItem("notificationPa");
    let shouldFetch = false;
    if (!prevNotification) {
      shouldFetch = true;
    } else {
      try {
        const parsedNotification = JSON.parse(prevNotification);
        if (parsedNotification.time < Date.now() - 18000000) {
          shouldFetch = true;
        } else {
          this.setState({
            shouldShow: parsedNotification.show,
            notificationText: parsedNotification.notification_text,
          });
        }
      } catch (error) {
        console.log("error parsing prev state", error);
      }
    }
    if (shouldFetch) {
      fetch(`https://pa.purpleandbold.net/wp-json/wp/v2/pages/219`)
        .then(function (response) {
          return response.json();
        })
        .then((res) => {
          const notification = res.acf.notification;
          if (notification.notification_text !== "") {
            this.setState({
              shouldShow: notification.show,
              notificationText: notification.notification_text,
            });
            try {
              localStorage.setItem(
                "notificationPa",
                JSON.stringify({
                  time: Date.now(),
                  notification_text: notification.notification_text,
                  show: notification.show,
                })
              );
            } catch (error) {
              console.log("error setting local state", error);
            }
          }
        });
    }
  }
  render() {
    if (this.state.shouldShow) {
      return (
        // <CSSTransition
        //   in={this.state.shouldShow}
        //   timeout={300}
        //   classNames="notifi"
        //   unmountOnExit
        // >
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
        // </CSSTransition>
      );
    } else {
      return "";
    }
  }
}

export default Notification;
