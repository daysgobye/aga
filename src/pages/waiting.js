import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import Content from "../components/utility/Content/Content";
import SEO from "../components/seo";
import Banner from "../components/banner/banner";
import Spacer from "../components/spacer/spacer";
import Signup from "../components/page_bottom_signup/page_signup";

//styles
import "../components/styles/deposit.sass";

class Deposit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cleanUp: false,
      item: {
        id: "1",
        name: "Waiting List",
        url: "http://thepastryacademy.com/witing",
        price: "2000",
        stackable: false,
      },
      newItem: {
        id: "2",
        name: "Waiting List",
        url: "http://thepastryacademy.com/witing",
        price: "1675",
        stackable: false,
      },
      newPrice: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      window.Snipcart.api.items.clear();
      //see if there is already an item in the cart
      //if not add the deposit
      if (window.location.hash.includes("2021")) {
        window.Snipcart.api.items.add(this.state.newItem);
        this.setState({ newPrice: true });
      } else {
        window.Snipcart.api.items.add(this.state.item);
      }
    }, 3000);
  }
  renderUpdatedDescription = (data) => {
    if (this.state.newPrice) {
      return data.acf.payment_card.description
        .replace("15,75", "16,75")
        .replace("1,575", "1,675");
    } else {
      return data.acf.payment_card.description;
    }
  };
  render() {
    const data = this.props.data.allWordpressPage.edges[0].node;
    return (
      <Layout>
        <SEO page="Pay Tuition Deposit" />
        <div className="deposit">
          <Banner
            btnText="Contact Us"
            linkPage="contact"
            title={data.acf.banner.hero_text}
            subSubHeadding={data.acf.banner.sub_headding}
            cta={data.acf.banner.cta}
            sides={true}
            img={data.acf.banner.image.localFile.childImageSharp.fluid}
            heroimgalt={data.acf.banner.alt_text}
          />
          <Spacer />
          <Content>
            <div className="deposit__container">
              <div className="deposit__container__cta">
                <div className="deposit__container__cta__content">
                  <h3>{data.acf.payment_card.headding}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.renderUpdatedDescription(data),
                    }}
                  />
                  <button
                    id="buyButton"
                    data-item-url="https://thepastryacademy.com/waiting"
                    className="snipcart-checkout"
                    // data-item-id="1"
                    // data-item-name="Deposit"
                    // data-item-price="1000.00"
                    type="button"
                  >
                    Pay Tuition Deposit
                  </button>
                </div>
              </div>
              <Spacer />
              <div className="deposit__container__mid">
                <h3>{data.acf.enrollment_process.mid_page_headding}</h3>
                <div className="deposit__container__mid__description">
                  <p>{data.acf.enrollment_process.mid_page_decription}</p>
                </div>
              </div>
              <div className="deposit__container__process">
                <Spacer />
                <div className="deposit__container__process__body">
                  <div className="deposit__container__process__body__steps">
                    <div className="deposit__container__process__body__steps__single">
                      <h4>1. {data.acf.enrollment_process.step_1_title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            data.acf.enrollment_process.step_1_description,
                        }}
                      />
                      <hr />
                    </div>
                    <div className="deposit__container__process__body__steps__single">
                      <h4>2. {data.acf.enrollment_process.step_2_title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            data.acf.enrollment_process.step_2_description,
                        }}
                      />
                      <hr />
                    </div>
                    <div className="deposit__container__process__body__steps__single">
                      <h4>3. {data.acf.enrollment_process.step_3_title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            data.acf.enrollment_process.step_3_description,
                        }}
                      />
                      <hr />
                    </div>
                    <div className="deposit__container__process__body__steps__single">
                      <h4>4. {data.acf.enrollment_process.step_4_title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            data.acf.enrollment_process.step_4_description,
                        }}
                      />
                      <hr />
                    </div>
                  </div>
                  <div className="deposit__container__process__body__image">
                    <div className="deposit__container__process__body__image__gats">
                      <Img
                        fluid={
                          data.acf.enrollment_process.image.localFile
                            .childImageSharp.fluid
                        }
                        alt={data.acf.enrollment_process.image.alt_text}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Spacer />
              <Signup />
            </div>
          </Content>
        </div>
        <Content>
          {/* <button
            id="buyButton"
            data-item-url="localhost:8000/Deposit"
            className="snipcart-checkout"
            data-item-id="1"
            data-item-name="Deposit"
            data-item-price="1000.00"
            type="button"
          >
            Pay Deposit
          </button> */}
        </Content>
        <button
          className="snipcart-add-item visuallyhidden"
          data-item-name={this.state.item.name}
          data-item-id={this.state.item.id}
          data-item-url={this.state.item.url}
          data-item-price={this.state.item.price}
        ></button>
        <button
          className="snipcart-add-item visuallyhidden"
          data-item-name={this.state.newItem.name}
          data-item-id={this.state.newItem.id}
          data-item-url={this.state.newItem.url}
          data-item-price={this.state.newItem.price}
        ></button>
      </Layout>
    );
  }
}
export const query = graphql`
  query {
    allWordpressPage(filter: { title: { regex: "/Waiting_List/" } }) {
      edges {
        node {
          acf {
            banner {
              hero_text
              sub_headding
              cta
              image {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                      ...GatsbyImageSharpFluid_noBase64
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
export default Deposit;
