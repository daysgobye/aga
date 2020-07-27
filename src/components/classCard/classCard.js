import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
// import ClassCard from "../components/classCard/classCard";

//styles
import "./classCard.sass";
import Enroll from "../../pages/enroll";
import { pt } from "date-fns/esm/locale";

class ClassCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerDiv: false,
    };
  }
  componentDidMount() {
    const wmm = window.matchMedia("(max-width: 700px)");
    window.addEventListener("resize", () => {
      if (wmm.matches) {
        this.setState({
          centerDiv: true,
        });
      } else {
        this.setState({
          centerDiv: false,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div
          onClick={() => this.props.toggleOpen(this.props.index)}
          className={`masterclass__container__class c${this.props.className}`}
        >
          <div className="masterclass__container__class__card">
            <div className="masterclass__container__class__card__left">
              <div className="masterclass__container__class__card__left__image">
                <Img
                  fluid={this.props.leftImage}
                  alt={this.props.leftAltText}
                />
              </div>
            </div>
            <div className="masterclass__container__class__card__center">
              <div className="masterclass__container__class__card__center__info">
                <h3>{this.props.title}</h3>
                <h4>{`${this.props.startDate} - ${this.props.endDate} ${this.props.year}`}</h4>
                <span>
                  <p>Click For More Information</p>
                </span>
              </div>
            </div>
            {this.state.centerDiv ? <div className="centerDivOne" /> : ""}
            {this.state.centerDiv ? <div className="centerDivTwo" /> : ""}
            <div className="masterclass__container__class__card__right">
              <div className="masterclass__container__class__card__right__image">
                <Img
                  fluid={this.props.rightImage}
                  alt={this.props.rightAltText}
                />
              </div>
            </div>
          </div>
        </div>
        <SlideDown>
          {this.props.isOpen ? (
            <div className="masterclass__container__class__dropdown">
              <div className="masterclass__container__class__dropdown__item">
                {/* <h4>About The Chef</h4>
                <p>{this.props.aboutChef} </p> */}
                <a
                  className="instagram_link"
                  target="_blank"
                  href={this.props.instagramLink}
                >
                  <div className="masterclass__container__class__dropdown__item__icon">
                    {" "}
                    <img
                      src={this.props.icon.source_url}
                      // fluid={this.props.icon.localFile.childImageSharp.fluid}
                      alt={this.props.icon.alt_text}
                    />{" "}
                  </div>
                  View {this.props.chefName} on Instagram
                </a>
              </div>
              <div className="masterclass__container__class__dropdown__item">
                <h4>About The Class</h4>
                <p>{this.props.aboutClass}</p>
              </div>
              <div className="masterclass__container__class__dropdown__item price">
                <h4>Price:</h4>
                <p>{`$ ${parseInt(this.props.price).toLocaleString()}`}</p>
              </div>
              <button onClick={() => this.props.addToCart(this.props.m)}>
                Register Now
              </button>
            </div>
          ) : null}
        </SlideDown>
      </div>
    );
  }
}
{
  /* <SlideDown>
{this.state.open ? (
  <p dangerouslySetInnerHTML={{ __html: this.props.desc }} />
) : null}
</SlideDown> */
}
export default ClassCard;
