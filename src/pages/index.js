import React, { Component } from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>

        </Content>
      </Layout>
    );
  }
}

// export const query = graphql`
// query {

// }
// `
export default IndexPage;