import React, { Component } from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'
import ProductCard from '../components/productCard/productCard';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const data = this.props.data.allWordpressWpProduct.edges
        return (
            <Layout>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <Content>
                    {
                        data.map(prod => (
                            <div
                                key={prod.id}
                            >
                                <ProductCard
                                    title={prod.node.title}
                                    wpid={prod.node.wordpress_id}
                                    img={prod.node.featured_media.localFile.childImageSharp.fluid}
                                />
                            </div>
                        ))
                    }
                </Content>
            </Layout>
        );
    }
}

export const query = graphql`
query {
    allWordpressWpProduct {
        edges {
          node {
            id
            title
            content
            wordpress_id
            featured_media{
                localFile{
                  childImageSharp{
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                  }
                }
              }
          }
        }
      }
}
`;
export default Products;