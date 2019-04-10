import React, { Component } from "react";
import { Link } from "gatsby";

import "./footer.sass";
import Img from "gatsby-image";
import BuiltBy from "./builtby";
import Content from "../utility/Content/Content";

class Footer extends Component {
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
      linkMatch: ""
    };
  }
  componentDidMount() { }
  findSite(str) {
    const patt = /www.(.*?).com/g;
    return patt.exec(str)[1];
  }
  render() {
    const data = this.props;
    return (
      <footer className="footer">
        <Content>
          <div className="footer__cols">
            <div className="footer__cols__single">
              <div className="footer__cols__single__title">
                <Link to={"/"}>
                  <h1>{this.props.siteTitle}</h1>
                  <h5 className="headder__title__sub">{this.props.subTitle}</h5>
                </Link>
              </div>
              <div className="footer__cols__single__links">
                {this.props.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.name}
                    aria-label={`link to ${
                      this.props.siteTitle
                      }'s ${this.findSite(link.name)} page`}
                  >
                    {" "}
                    <Img fluid={link.icon}
                      alt={link.alt} />
                  </a>
                ))}
              </div>
              <p>
                Telephone:{" "}
                <a href={`tel:+1${this.props.phone}`}>{this.props.phone}</a>{" "}
              </p>
              <p>
                E-Mail:{" "}
                <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
              </p>
            </div>
            <div className="footer__cols__single">
              <div className="footer__cols__single__image">
                <div className="footer__cols__single__image__container">
                  <Img fluid={data.logo} alt={data.logoalt} />
                </div>
              </div>
            </div>
            <div className="footer__cols__single">
              <nav className="nav">
                {/* this is for to pop up the cart
                <a className="snipcart-checkout">cart</a> */}
                {this.state.navlinks.map((link, index) => (
                  <div className="nav__link" key={index}>
                    <Link to={link.link}>{link.title}</Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
          {/* <BuiltBy /> */}
        </Content>
        <div className="copy">
          <p>
            © {new Date().getFullYear()} Pastry Academy, LLC. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
