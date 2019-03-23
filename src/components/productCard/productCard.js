// this is a product card it will deisplay product info and fetch the price and quanty from the db on load incase they have changed sence the last build
// -----------
// props
// ---------------
// title string 
// img obj from obj fluid query
// wpid string


import React, { Component } from 'react';
import Img from "gatsby-image";
import ButtonRound from '../buttonRound/buttonRound'

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log(
            this.props
        );

    }
    addToCart() {

    }
    render() {
        return (
            <div className="product">
                <Img fluid={this.props.img} />
                <h3>{this.props.title}</h3>
                <ButtonRound
                    innerText={`Add to cart`}
                    action={this.addToCart}
                    type="func"
                />
            </div>
        );
    }
}

export default ProductCard;