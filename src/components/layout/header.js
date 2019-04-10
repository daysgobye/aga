import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "./header.sass";
import Content from "../utility/Content/Content";
class Headder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navlinks: [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Team",
          link: "team"
        },
        {
          title: "Program",
          link: "program"
        },
        {
          title: "Photos",
          link: "photos"
        },
        {
          title: "FAQs",
          link: "faq"
        },
        {
          title: "Enroll",
          link: "enroll"
        },
        {
          title: "Contact",
          link: "contact"
        }
      ],
      navOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    const currentstate = this.state.navOpen;
    this.setState({ navOpen: !currentstate });
  }
  render() {
    return (
      <div className="header__wrapper">
        <Content>
          <div className="header">
            <div className="header__title">
              <Link
                to={"/"}
                aria-label={`${this.props.siteTitle}  ${this.props.subTitle}`}
              >
                <h1>
                  <div className="image">
                    <Img fluid={this.props.textLogo} alt={this.props.textalt} />
                  </div>
                </h1>
              </Link>
            </div>
            <div className="header__logo">
              <Img fluid={this.props.logo} alt={this.props.mainalt} />
            </div>
            {/* desktop nav */}
            <div className="desktop">
              <nav className="nav">
                {/* this is for to pop up the cart
                <a className="snipcart-checkout">cart</a> */}
                {this.state.navlinks.map((link, index) => (
                  <div className="nav__link" key={index}>
                    <Link activeClassName="nav__link__active" to={link.link}>
                      {link.title}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            {/* mobile nav */}
            <div
              className={`mobile ${
                this.state.navOpen ? "nav__open" : "nav__closed"
                }`}
            >
              <button
                className="dot"
                aria-label="click to expand nav"
                onClick={() => this.toggleNav()}
              >
                <div className="dot__one" />
                <div className="dot__two" />
                <div className="dot__three" />
              </button>
              <nav className={`nav`}>
                {this.state.navlinks.map((link, index) => (
                  <div className="nav__link">
                    <Link
                      to={link.link}
                      activeClassName="nav__link__active"
                      key={index}
                    >
                      {link.title}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default Headder;
