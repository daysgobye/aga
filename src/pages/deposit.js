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
componentDidMount(){
				console.log(window)
				window.Snipcart.api.items.add({
								"id":"1",
								"name":"Deposit",
								"url":"localhost:8000/Deposit",
								"price":"1000.00",
								"staclable":true,
				})
}
render() {
				const data = this.props.data.allWordpressPage.edges[0].node
				console.log(data)

		return (
		<Layout>
			<Content>
						<button
						id="buyButton"
						data-item-url="localhost:8000/Deposit"
						className="snipcart-checkout"
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
export const query = graphql`
query{
 allWordpressPage(filter: {title: {regex: "/Deposit/"}}) {
    edges {
      node {
        acf {
          banner {
            hero_text
            cta
            image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
          payment_card {
            headding
            description
          }
          enrollment_process {
            step_1_title
            step_1_description
            step_2_title
            step_2_description
            step_3_title
            step_3_description
            step_4_title
            step_4_description
            mid_page_headding
            mid_page_decription
            image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`
export default Deposit
