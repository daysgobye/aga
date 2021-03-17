import React, {Component} from 'react';
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/layout"
import Content from "../components/utility/Content/Content"
class Product extends React.Component {
constructor(props) {
	super(props);
this.state = {
}

}

render() {
				const data = this.props.data.wordpressAcfProduct
				console.log(data)
		return (
						<Layout>
						<Content>
						good shit
						</Content>
						</Layout>
		
			
		);
	}
}
export const query = graphql`
query($slug: Int){
  wordpressAcfProduct(wordpress_id:{eq: $slug}) {
        wordpress_id
        acf {
          main_image {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }

          product_description
          in_stock
          show_in_store
          price
          variable_product
					colors{
            color
          }
          sizes{
            size

          }
        }
      }
  }

`
 export default Product ;
