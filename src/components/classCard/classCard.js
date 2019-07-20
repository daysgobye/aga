import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

// import ClassCard from "../components/classCard/classCard";

//styles
import "./classCard.sass";

class ClassCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          className={`masterclass__container__class c${this.props.className}`}
        >
          <div className="masterclass__container__class__card">
            <div className="masterclass__container__class__card__left">
              <div className="masterclass__contaner__class__card__left__image">
                <Img
                  fluid={this.props.leftImage}
                  alt={this.props.leftAltText}
                />
              </div>
            </div>
            <div className="masterclass__container__class__card__center">
              <div className="masterclass__container__class__card__center__info">
                <h3>{this.props.title}</h3>
                <h4>{`${this.props.startDate} - ${this.props.endDate} ${
                  this.props.year
                }`}</h4>
              </div>
            </div>
            <div className="masterclass__container__class__card__right">
              <div className="masterclass__contaner__class__card__right__image">
                <Img
                  fluid={this.props.rightImage}
                  alt={this.props.rightAltText}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="masterclass__container__class__dropdown">
          <div className="masterclass__container__class__dropdown__item">
            <h5>About The Chef</h5>
            <p>{this.props.aboutChef}</p>
          </div>
          <div className="masterclass__container__class__dropdown__item">
            <h5>About The Class</h5>
            <p>{this.props.aboutClass}</p>
          </div>
          <div className="masterclass__container__class__dropdown__item price">
            <h5>Price:</h5>
            <p>{`$ ${parseInt(this.props.price).toLocaleString()}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassCard;
