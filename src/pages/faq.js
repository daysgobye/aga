import React, { Component } from "react";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Content from "../components/utility/Content/Content";
import Banner from "../components/banner/banner";
import "../components/styles/faq.sass";
import SlideUpDown from "../components/slide_up_down/slide_up_down";
import Signup from "../components/page_bottom_signup/page_signup";
import Spacer from "../components/spacer/spacer";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = this.props.data.allWordpressPage.edges[0].node;
    const staf = this.props.data.staf.edges;
    const location = this.props.data.location.edges;
    const academy = this.props.data.academy.edges;
    const general = this.props.data.general.edges;
    return (
      <Layout>
        <SEO
          page="FAQ"
          description="View answers to our frequently asked questions."
        />
        <Banner
          btnText="Contact Us"
          linkPage="contact"
          title={data.acf.banner.hero_text}
          cta={data.acf.banner.cta}
          sides={true}
          img={data.acf.banner.image.localFile.childImageSharp.fluid}
          heroimgalt={data.acf.banner.image.alt_text}
        />
        <Content>
          <div className="wraper">
            {/* <Spacer /> */}
            <div className="faq">
              <div className="faq__section">
                <div className="faq__section__left">
                  <h3>General</h3>
                </div>
                <div className="faq__section__right">
                  {general.map(el => (
                    <SlideUpDown
                      key={el.node.id}
                      name={el.node.acf.question}
                      desc={el.node.acf.answer}
                    />
                  ))}
                </div>
              </div>
              <div className="faq__section">
                <div className="faq__section__left">
                  <h3>Academy</h3>
                </div>
                <div className="faq__section__right">
                  {academy.map(el => (
                    <SlideUpDown
                      key={el.node.id}
                      name={el.node.acf.question}
                      desc={el.node.acf.answer}
                    />
                  ))}
                </div>
              </div>
              <div className="faq__section">
                <div className="faq__section__left">
                  <h3>Staff</h3>
                </div>
                <div className="faq__section__right">
                  {staf.map(el => (
                    <SlideUpDown
                      key={el.node.id}
                      name={el.node.acf.question}
                      desc={el.node.acf.answer}
                    />
                  ))}
                </div>
              </div>
              <div className="faq__section">
                <div className="faq__section__left">
                  <h3>Location</h3>
                </div>
                <div className="faq__section__right">
                  {location.map(el => (
                    <SlideUpDown
                      key={el.node.id}
                      name={el.node.acf.question}
                      desc={el.node.acf.answer}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Spacer />
            <Signup />
          </div>
        </Content>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    staf: allWordpressWpFaq(
      filter: { acf: { catagory: { regex: "/Staf/" } } }
    ) {
      edges {
        node {
          id
          title
          acf {
            question
            answer
          }
        }
      }
    }
    location: allWordpressWpFaq(
      filter: { acf: { catagory: { regex: "/Location/" } } }
    ) {
      edges {
        node {
          id
          title
          acf {
            question
            answer
          }
        }
      }
    }
    academy: allWordpressWpFaq(
      filter: { acf: { catagory: { regex: "/Academy/" } } }
    ) {
      edges {
        node {
          id
          title
          acf {
            question
            answer
          }
        }
      }
    }
    general: allWordpressWpFaq(
      filter: { acf: { catagory: { regex: "/General/" } } }
    ) {
      edges {
        node {
          id
          title
          acf {
            question
            answer
          }
        }
      }
    }
    allWordpressPage(filter: { title: { regex: "/Faq/" } }) {
      edges {
        node {
          title
          acf {
            banner {
              hero_text
              cta
              image {
                alt_text
                localFile {
                  childImageSharp {
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
    }
  }
`;
export default Faq;
