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
        this.state = {
            price: "",
            quanty: "",
            loding: true
        }
        this.addToCart = this.addToCart.bind(this)
    }
    componentDidMount() {
        console.log(
            this.props
        );
        fetch(`https://playground.purpleandbold.net/wp-json/wp/v2/product/${this.props.wpid}`
        )
            .then(res => res.json()
            ).then(data => {
                this.setState({
                    price: data.acf.price,
                    quanty: data.acf.quanty,
                    loding: false
                })
            }).catch(err => console.log(err)
            )
    }
    addToCart() {
        if (!this.state.loding) {
            if (this.state.quanty >= 1) {

                return (

                    <button
                        className='snipcart-add-item'
                        data-item-id={this.props.wpid}
                        data-item-price={this.state.price}
                        data-item-image={this.props.cartimg}
                        data-item-name={this.props.title}
                        data-item-description={this.props.dec}
                        data-item-url={"localhost:8000/products"}
                    >
                        add to cart
                </button>
                )
            }
            else {
                return (
                    <button> out of stock</button>
                )
            }
        }
        else {
            return (
                <button

                >
                    add to cart
    </button>
            )
        }
    }
    render() {
        return (
            <div className="product">
                <Img fluid={this.props.img} />
                <h3>{this.props.title}</h3>
                {/* <ButtonRound
                    innerText={`Add to cart`}
                    action={this.addToCart}
                    type="function"
                /> */}
                {this.addToCart()}
            </div>
        );
    }
}

export default ProductCard;