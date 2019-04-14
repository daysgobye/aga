import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Content from "../components/utility/Content/Content";
import BackgroundBanner from "../components/background_banner/background_banner";
import "../components/styles/homepage.sass";
import ButtonRound from "../components/buttonRound/buttonRound";
import Signup from "../components/page_bottom_signup/page_signup";
import Spacer from "../components/spacer/spacer";
import ReactGA from "react-ga";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home"
    };
  }
  componentDidMount() {
    //adds event listener to the page for scroll events to log in custom GA event if page is scrolled below a certain %
    // window.addEventListener("scroll", this.getScrollPercent);
  }
  getScrollPercent() {
    //gets overall height of page
    const pageHeight = document.body.getBoundingClientRect().height;
    //the amount of the page that is scrolled down
    const currentPage = this.homepage;
    const scrolledDown = currentPage.offsetTop;
    console.log(scrolledDown);
    // ref={div => (this.homepage = div)}
  }
  logScrollEvent() {
    console.log(`you're over 50% down the page`);
  }
  logButtonEvent(clickThrough) {
    ReactGA.event({
      category: `Button Click`,
      action: `User on ${this.state.page} clicked ${clickThrough} Button`
    });
    console.log(this.state.page, clickThrough);
  }
  render() {
    const courses = this.props.data.allWordpressWpCourseWeek.edges;

    const data = this.props.data.allWordpressPage.edges[0].node;
    const program = this.props.data.programInfo.edges[0].node;
    const sponsors = this.props.data.allWordpressAcfSponsor.edges;

    return (
      <Layout>
        <SEO page="Home" />
        <BackgroundBanner
          btnText="View FAQ"
          linkPage="faq"
          title={data.acf.banner.hero_text}
          cta={data.acf.banner.cta}
          sides={true}
          img={data.acf.banner.background_image.localFile.childImageSharp.fluid.src}
          heroimg={data.acf.banner.hero_image.localFile.childImageSharp.fluid}
          heroimgalt={data.acf.banner.hero_image.alt_text}
        />
        <Content>
          <div className="wraper">
            <Spacer />
            <div className="bio">
              <div className="bio__info">
                <div className="bio__info__title">
                  <h3>{data.acf.bio_section.title}</h3>
                  <h4>{data.acf.bio_section.name} </h4>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: data.acf.bio_section.bio }}
                />
                <div
                  className="bio__info__title__button"
                  onClick={this.logButtonEvent("Team")}
                >
                  <ButtonRound
                    innerText={"Meet The Team"}
                    action={"team"}
                    type="gatsbylink"
                    passedState={""}
                    padding="4.5px 20px"
                    fsize="0.85"
                  />
                </div>
              </div>
              <div className="bio__image">
                <div className="bio__image__container">
                  <Img
                    fluid={
                      data.acf.bio_section.image.localFile.childImageSharp.fluid
                    }
                    alt={data.acf.bio_section.image.alt_text}
                  />
                </div>
              </div>
            </div>
            <Spacer />
          </div>
        </Content>
        <div className="program__overview">
          <div className="program__overview__image">
            <div className="program__overview__image__container">
              <Img
                fluid={data.acf.academy_image.localFile.childImageSharp.fluid}
                alt={data.acf.academy_image.alt_text}
              />
            </div>
          </div>
          <div className="program__overview__card">
            <h3>The Academy</h3>
            <h4 className="mobile-centered">Curriculum Overview</h4>
            <div
              className="mobile-centered"
              dangerouslySetInnerHTML={{
                __html: program.acf.curriculum_overview
              }}
            />
            <div className="program__overview__card__button">
              <div onClick={this.logButtonEvent("Program")}>
                <ButtonRound
                  innerText={"View Full Curriculum"}
                  action={"program"}
                  type="gatsbylink"
                  passedState={""}
                  padding="4.5px 20px"
                  fsize="0.85"
                />
              </div>
            </div>

            <div className="program__overview__card__info">
              <div className="program__overview__card__info__data">
                <h4>Location</h4>
                <p>Las Vegas, NV</p>
              </div>
              <div className="program__overview__card__info__data">
                <h4>Course Length</h4>
                <p>{courses.length} Weeks</p>
              </div>
              <div className="program__overview__card__info__data">
                <h4>Class Size</h4>
                <p>{program.acf.class_size} Students</p>
              </div>
            </div>
          </div>
        </div>
        <Content>
          <div className="wraper home">
            <Spacer />
            <div className="sponsers">
              <h3>Sponsors</h3>
              <div className="sponsers__description">
                <div
                  dangerouslySetInnerHTML={{ __html: data.acf.sponsor_info }}
                />
              </div>

              {sponsors.map(el => (
                <div className="sponsers__single" key={el.node.id}>
                  <div className="sponsers__single__image">
                    <Img
                      fluid={el.node.acf.logo.localFile.childImageSharp.fluid}
                      alt={el.node.acf.logo.alt_text}
                    />
                  </div>
                </div>
              ))}
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
    allWordpressPage(filter: { title: { regex: "/Home Page/" } }) {
      edges {
        node {
          title
          acf {
            banner {
              hero_text
              cta
              background_image {
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid_noBase64
                      src
                    }
                  }
                }
              }
              hero_image {
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
            bio_section {
              title
              name
              bio
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
            academy_image {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
            sponsor_info
          }
        }
      }
    }
    programInfo: allWordpressPage(filter: { title: { regex: "/Program/" } }) {
      edges {
        node {
          title
          acf {
            curriculum_overview
            class_size
          }
        }
      }
    }
    allWordpressWpCourseWeek {
      edges {
        node {
          id
        }
      }
    }
    allWordpressAcfSponsor {
      edges {
        node {
          id
          acf {
            logo {
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
`;
export default IndexPage;
