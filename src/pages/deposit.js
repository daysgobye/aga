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
        name: "Deposit",
        url: "http://thepastryacademy.com/deposit",
        price: "1575",
        stackable: false,
      },
      newItem: {
        id: "2",
        name: "Deposit",
        url: "http://thepastryacademy.com/deposit",
        price: "1675",
        stackable: false,
      },
    };
  }
  componentDidMount() {
    console.log(window.location);
    setTimeout(() => {
      window.Snipcart.api.items.clear();
      //see if there is already an item in the cart
      //if not add the deposit
      if (window.location.hash.includes("2022")) {
        window.Snipcart.api.items.add(this.state.newItem);
      } else {
        window.Snipcart.api.items.add(this.state.item);
      }
    }, 3000);
    // setTimeout(() => {
    //   console.log("items", items);
    //   if (items.length == 0) {
    //     window.Snipcart.api.items.add(cloneOfItem);
    //     this.setState({ cleanUp: true });
    //   } else {
    //     //checks if any of the items in the cart are the deposit and if not then it will add one
    //     let depositIsIn;
    //     items.forEach((item) => {
    //       if (item.id === "1") {
    //         depositIsIn = true;
    //       }
    //     });
    //     // runs a for each on the cart to remove all of the old deposits in the cart then adds just one
    //     if (depositIsIn) {
    //       console.log("somthingd in");
    //       items.forEach((item) => {
    //         console.log("removed one");
    //         window.Snipcart.api.items.remove("1");
    //       });
    //       setTimeout(() => {
    //         console.log("in here");
    //         window.Snipcart.api.items.add(cloneOfItem);
    //       }, 100);
    //     }
    //     this.setState({ cleanUp: true });
    //   }
    // }, 3000);

    // //in a time out addes checks to see if the clean up just above is donethen lessens for the deposit item to be removed from the cart and adds it if it is removed
    // setTimeout(() => {
    //   if (this.state.cleanUp) {
    //     window.Snipcart.subscribe("item.removed", (item) => {
    //       if (item.id === "1") {
    //         window.Snipcart.api.items.add(cloneOfItem);
    //       }
    //     });
    //   }
    // }, 6000);
  }
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
                      __html: data.acf.payment_card.description,
                    }}
                  />
                  <button
                    id="buyButton"
                    data-item-url="localhost:8000/Deposit"
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
    allWordpressPage(filter: { title: { regex: "/Deposit/" } }) {
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
