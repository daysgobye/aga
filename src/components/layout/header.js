import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "./header.sass";
import Content from "../utility/Content/Content";
import ReactGA from "react-ga";

class Headder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navlinks: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "Team",
          link: "team",
        },
        {
          title: "Program",
          link: "program",
        },
        {
          title: "Photos",
          link: "photos",
        },
        {
          title: "FAQs",
          link: "faq",
        },
        {
          title: "Enroll",
          link: "enroll",
        },
        {
          title: "Masterclasses",
          link: "masterclasses",
        },
        {
          title: "Sweet Shop",
          link: "https://www.amauryguichon.com/",
        },
        {
          title: "Contact",
          link: "contact",
        },
      ],
      navOpen: false,
    };
    this.logMobileNavEvent = this.logMobileNavEvent.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    const currentstate = this.state.navOpen;
    this.setState({ navOpen: !currentstate });
  }
  logNavEvent() {
    ReactGA.event({
      category: `Navigation Click`,
      action: `User click on Navigation Link`,
    });
  }

  logMobileNavEvent() {
    this.toggleNav();
    ReactGA.event({
      category: `Mobile Navigation Click`,
      action: `User click on Navigation Link`,
    });
  }
  renderLinks = (link, mobile) => {
    if (link.link.startsWith("https")) {
      return (
        <a
          href={link.link}
          activeClassName="nav__link__active"
          onClick={mobile ? this.logMobileNavEvent.bind(this) : this.logNavEvent.bind(this)}
          target="_blank"
        >
          {link.title}
        </a>
      )
    } else {
      return (
        <>
          <Link
            to={link.link}
            activeClassName="nav__link__active"
            onClick={mobile ? this.logMobileNavEvent.bind(this) : this.logNavEvent.bind(this)}
          >
            {link.title}
          </Link>
        </>
      )
    }
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
                    <div className="image__container">
                      <Img
                        fluid={this.props.textLogo}
                        alt={this.props.textalt}
                      />
                    </div>
                  </div>
                </h1>
              </Link>
            </div>
            <div className="header__logo">
              <Link
                to={"/"}
                aria-label={`${this.props.siteTitle}  ${this.props.subTitle}`}
              >
                <Img fluid={this.props.logo} alt={this.props.mainalt} />
              </Link>
            </div>
            {/* desktop nav */}
            <div className="desktop">
              <nav className="nav">
                {/* this is for to pop up the cart
                <a className="snipcart-checkout">cart</a> */}
                {this.state.navlinks.map((link, index) => (
                  <div className="nav__link" key={index}>
                    {this.renderLinks(link)}
                  </div>
                ))}
              </nav>
            </div>
            {/* mobile nav */}
            <div
              className={`mobile ${this.state.navOpen ? "nav__open" : "nav__closed"
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
                  <div key={index} className="nav__link">
                    {this.renderLinks(link, true)}
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
