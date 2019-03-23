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
        // fetch(`https://playground.purpleandbold.net/wp-json/wc/v3/products/${this.props.wpid}?consumer_Key=ck_f80e5f5565de2a5be69fa675870730b222b24a4e`, {
        //     headers: {
        //         "consumerKey": "ck_f80e5f5565de2a5be69fa675870730b222b24a4e",
        //         "consumerSecret": "cs_69dc9ced2eb2dced24522b710ef465fc1fbce3a5"
        //     }
        // })
        //     .then(res => console.log(res, "pw res")
        //     ).catch(err => console.log(err)
        //     )
    }
    addToCart() {

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
                <button
                    className='snipcart-add-item'
                    data-item-id={this.props.wpid}
                    data-item-price={'10'}
                    data-item-image={""}
                    data-item-name={this.props.title}
                    data-item-description={"this.props.description"}
                    data-item-url={"localhost:8000/products"}
                >
                    add to cart
                </button>
            </div>
        );
    }
}

export default ProductCard;