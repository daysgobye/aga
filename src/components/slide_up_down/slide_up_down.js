import React, { Component } from "react";
// import ReactGA from 'react-ga'

//slide up slide down plugin
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import PropTypes from "prop-types";

//images
import arrowIcon from "../../images/arrow-icon-services.svg";

class SlideUpDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      arrowTrace:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCA3LjMzbDIuODI5LTIuODMgOS4xNzUgOS4zMzkgOS4xNjctOS4zMzkgMi44MjkgMi44My0xMS45OTYgMTIuMTd6Ii8+PC9zdmc+",
      expandedText: ""
    };
  }
  // componentDidUpdate() {}
  toggleSlide() {
    this.setState({ open: !this.state.open });
  }
  // componentDidMount() {
  //   this.setText()
  // }
  // setText() {
  //   if(this.expandedName === '' || null)
  // }
  handleClick() {
    this.toggleSlide();
    // this.logEvent()
  }
  //   logEvent() {
  //     ReactGA.event({
  //       category: 'Service Click',
  //       action: 'User clicked on Service Item',
  //     })
  // }
  handleName() {
    if (this.props.diffText) {
      return (
        <>
          <h4
            className={`faq__section__right__slide__title__name ${
              !this.state.open ? "visible" : "hidden"
            }`}
          >
            {this.props.name}
          </h4>
          <h4
            className={`faq__section__right__slide__title__name ${
              this.state.open ? "visible" : "hidden"
            }`}
          >
            {this.props.expandedName}
          </h4>
        </>
      );
    } else {
      return (
        <h4 className="faq__section__right__slide__title__name visible">
          {this.props.name}
        </h4>
      );
    }
  }
  nameOfExpanded() {
    return this.name;
  }
  render() {
    return (
      <div className="faq__section__right__slide">
        <div
          className="faq__section__right__slide__title"
          onClick={this.handleClick.bind(this)}
        >
          {/* <h4>
            {!this.state.open ? this.props.name : this.props.expandedName}
          </h4> */}
          {this.handleName()}

          <svg
            className={this.state.open ? "expanded" : ""}
            viewBox="0 0 117 63"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C-1.77635684e-15,3.2 -1.77635684e-15,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6 Z" />
          </svg>
        </div>
        <SlideDown>
          {this.state.open ? (
            <p dangerouslySetInnerHTML={{ __html: this.props.desc }} />
          ) : null}
        </SlideDown>
      </div>
    );
  }
}

export default SlideUpDown;
