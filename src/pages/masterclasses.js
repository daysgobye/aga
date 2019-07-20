import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import Content from "../components/utility/Content/Content";
import SEO from "../components/seo";
import Banner from "../components/banner/banner";
import Spacer from "../components/spacer/spacer";
import Signup from "../components/page_bottom_signup/page_signup";
import ClassCard from "../components/classCard/classCard";

//styles
import "../components/styles/masterclasses.sass";

class Masterclasses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log(this.props.data.allWordpressAcfMasterClass.edges);
  }
  render() {
    const data = this.props.data.allWordpressPage.edges[0].node;
    const masterclass = this.props.data.allWordpressAcfMasterClass.edges;
    return (
      <Layout>
        <SEO page="Masterclasses at The Pastry Academy" />
        <Banner
          btnText="Contact Us"
          linkPage="contact"
          title={data.acf.banner.banner_header}
          cta={data.acf.banner.banner_subheader}
          sides={false}
          img={data.acf.banner.banner_image.localFile.childImageSharp.fluid}
          heroimgalt={data.acf.banner.banner_image.alt_text}
        />
        <Spacer />
        <Content>
          <div className="masterclass">
            <div className="masterclass__container">
              {masterclass.map((m, index) => (
                <ClassCard
                  title={m.node.acf.card.class_name}
                  startDate={m.node.acf.card.class_start_date}
                  endDate={m.node.acf.card.class_end_date}
                  year={m.node.acf.card.calendar_year}
                  chefName={m.node.acf.card.chef_name}
                  instagramLink={m.node.acf.card.instagram_link}
                  leftImage={
                    m.node.acf.card.banner_image.left_image.localFile
                      .childImageSharp.fluid
                  }
                  leftAltText={m.node.acf.card.banner_image.left_image.alt_text}
                  rightImage={
                    m.node.acf.card.banner_image.right_image.localFile
                      .childImageSharp.fluid
                  }
                  rightAltText={
                    m.node.acf.card.banner_image.right_image.alt_text
                  }
                  aboutChef={m.node.acf.dropdown.about_the_chef}
                  aboutClass={m.node.acf.dropdown.about_the_class}
                  price={m.node.acf.dropdown.price}
                  className={index}
                />
              ))}
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allWordpressPage(filter: { title: { regex: "/master class page/" } }) {
      edges {
        node {
          title
          acf {
            banner {
              banner_header
              banner_subheader
              banner_image {
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid_noBase64
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
    allWordpressAcfMasterClass {
      edges {
        node {
          acf {
            card {
              class_length
              class_start_date
              class_end_date
              calendar_year
              instagram_link
              class_name
              chef_name
              banner_image {
                banner_text
                left_image {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                        src
                      }
                    }
                  }
                }
                right_image {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                        src
                      }
                    }
                  }
                }
              }
            }
            dropdown {
              about_the_chef
              about_the_class
              price
            }
          }
        }
      }
    }
  }
`;

export default Masterclasses;
