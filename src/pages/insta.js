import React, { Component } from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'

class Insta extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const pics = this.props.data.allInstaNode.edges
        return (
            <Layout>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <Content>
                    {
                        pics.map(pic => (
                            <div>
                                <p>{pic.node.caption}</p>
                                <Img fluid={pic.node.localFile.childImageSharp.fluid} />
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
  allInstaNode {
    edges {
      node {
        id
        likes
        comments
        mediaType
        preview
        original
        timestamp
        caption
        localFile {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        # Only available with the public api scraper
        thumbnails {
          src
          config_width
          config_height
        }
        dimensions {
          height
          width
        }
      }
    }
  }
}
`;
export default Insta;