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

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const courses = this.props.data.allWordpressWpCourseWeek.edges;

    const data = this.props.data.allWordpressPage.edges[0].node;
    const program = this.props.data.programInfo.edges[0].node;
    const sponsors = this.props.data.allWordpressAcfSponsor.edges;

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <BackgroundBanner
          btnText="View FAQ"
          linkPage="faq"
          title={data.acf.banner.hero_text}
          cta={data.acf.banner.cta}
          sides={true}
          img={data.acf.banner.background_image.localFile.childImageSharp.fluid}
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
                <p
                  dangerouslySetInnerHTML={{ __html: data.acf.bio_section.bio }}
                />
                <ButtonRound
                  innerText={"Meet The Team"}
                  action={"team"}
                  type="gatsbylink"
                  passedState={""}
                  padding="4.5px 20px"
                  fsize="0.9"
                />
              </div>
              <div className="bio__image">
                <Img
                  fluid={
                    data.acf.bio_section.image.localFile.childImageSharp.fluid
                  }
                  alt={data.acf.bio_section.image.alt_text}
                />
              </div>
            </div>
            <Spacer />
          </div>
        </Content>
        <div className="program__overview">
          <div className="program__overview__image">
            <Img
              fluid={data.acf.academy_image.localFile.childImageSharp.fluid}
              alt={data.acf.academy_image.alt_text}
            />
          </div>
          <div className="program__overview__card">
            <h4>Curriculum Overview</h4>
            <p
              dangerouslySetInnerHTML={{
                __html: program.acf.curriculum_overview
              }}
            />
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
                <p>{program.acf.class_size}</p>
              </div>
            </div>
          </div>
        </div>
        <Content>
          <div className="wraper home">
            <Spacer />
            <div className="sponsers">
              <h3>Sponsors</h3>
              <p dangerouslySetInnerHTML={{ __html: data.acf.sponsor_info }} />
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
