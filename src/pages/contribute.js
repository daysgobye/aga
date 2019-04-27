import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Content from "../components/utility/Content/Content";
import Banner from "../components/banner/banner";
import "../components/styles/contribute.sass";
import ButtonRound from "../components/buttonRound/buttonRound";
import Signup from "../components/page_bottom_signup/page_signup";
import Spacer from "../components/spacer/spacer";
import ReactGA from "react-ga";

class Contribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationBalance: 0,
      tuitionPrice: 5000,
      percentEarned: 50,
      animationTiming: 100
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.calculatePercents();
    }, 10);
  }
  calculatePercents() {
    const balance = this.props.data.allWordpressPage.edges[0].node.acf
      .donation_balance;
    const tuition = this.props.data.allWordpressPage.edges[0].node.acf
      .tuition_price;
    const percentPaid = Math.floor((balance / tuition) * 100);
    this.setState({
      donationBalance: balance,
      tuitionPrice: tuition
    });
    // this.incrementBalance(balance);
    this.incrementPercent(percentPaid);
  }
  incrementPercent(num) {
    const limit = num;
    let x = 0;
    while (x <= limit) {
      this.setState({
        percentEarned: x
      });
      console.log(x);
      x++;
    }
  }
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  render() {
    const data = this.props.data.allWordpressPage.edges[0].node;
    return (
      <Layout>
        <SEO page="Contribute" />

        <Banner
          btnText="Contact Us"
          linkPage="contact"
          title={data.acf.banner.hero_text}
          cta={data.acf.banner.cta}
          sides={false}
          img={data.acf.banner.image.localFile.childImageSharp.fluid}
          heroimgalt={data.acf.banner.alt_text}
        />

        <div className="contribute">
          <Spacer />
          <Content>
            <div className="contribute__cta">
              <div className="contribute__cta__content">
                <h3>{data.acf.donation_title}</h3>
                <p>{data.acf.donation_text}</p>
                <div className="contribute__cta__content__button">
                  Donate Now
                </div>
              </div>
            </div>
          </Content>
          <Spacer />
          <div className="contribute__statistics">
            <div className="contribute__statistics__image">
              <div className="contribute__statistics__image__container">
                <div className="contribute__statistics__image__container__info">
                  <div className="contribute__statistics__image__container__info__container">
                    <div className="contribute__statistics__image__container__info__container__data">
                      <h4 className="bold">$ {this.state.donationBalance}</h4>
                      <h4>Raised To-Date</h4>
                    </div>
                    <div className="contribute__statistics__image__container__info__container__graph">
                      <div className="graph">
                        <div className="graph__top">
                          <p className="graph__top__title">
                            Progress Towards Next Student's Tuition
                          </p>
                        </div>
                        <div className="graph__bottom">
                          <div
                            className="graph__bottom__progress"
                            style={{
                              width: this.state.percentEarned + "%"
                            }}
                          >
                            <p>{this.state.percentEarned}%</p>
                          </div>
                          <div className="graph__bottom__bar">
                            <div
                              className="graph__bottom__bar__fill"
                              style={{
                                width: this.state.percentEarned + "%"
                              }}
                            />
                          </div>
                          <div className="graph__bottom__labels">
                            <p>0%</p>
                            <p>100%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  fluid={data.acf.page_image.localFile.childImageSharp.fluid}
                  alt={data.acf.page_image.alt_text}
                />
              </div>
            </div>
            <div className="contribute__statistics__card">
              <h3>{data.acf.contribute_statistics_header}</h3>
              <p className="mobile-centered">
                {data.acf.contribute_statistics_parapgraph}
              </p>
            </div>
          </div>
          <Spacer />
          <Signup />
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allWordpressPage(filter: { title: { regex: "/Donations/" } }) {
      edges {
        node {
          acf {
            banner {
              hero_text
              cta
              image {
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 3000) {
                      ...GatsbyImageSharpFluid_noBase64
                      src
                    }
                  }
                }
              }
            }
            donation_text
            donation_title
            page_image {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid_noBase64
                    src
                  }
                }
              }
            }
            contribute_statistics_header
            contribute_statistics_parapgraph
            donation_balance
            tuition_price
          }
        }
      }
    }
  }
`;

export default Contribute;
