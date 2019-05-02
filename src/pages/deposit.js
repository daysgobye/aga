import React, {Component} from 'react';
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/layout"
import Content from "../components/utility/Content/Content"

class Deposit extends React.Component {
constructor(props) {
	super(props);
	this.state = {
	
	}

}

render() {
		return (
		<Layout>
			<Content>
						<button
						data-item-url="localhost:8000/Deposit"
						className="snipcart-add-item snipcart-checkout"
    				data-item-id="1"
    				data-item-name="Deposit"
    				data-item-price="1000.00"
						type="button">
						Pay Deposit</button>
			</Content>
			</Layout>
		);
	}
}
export default Deposit
