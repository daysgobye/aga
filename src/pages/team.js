import React, { Component } from "react";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Content from "../components/utility/Content/Content";
import Banner from "../components/banner/banner";
import "../components/styles/team.sass";
import Signup from "../components/page_bottom_signup/page_signup";
import Spacer from "../components/spacer/spacer";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const teamMem = this.props.data.allWordpressAcfTeamMember.edges;
    const data = this.props.data.allWordpressPage.edges[0].node;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Banner
          btnText="Contact Us"
          linkPage="contact"
          title={data.acf.banner.hero_text}
          cta={data.acf.banner.cta}
          sides={true}
          img={data.acf.banner.image.localFile.childImageSharp.fluid}
        />
        <Content>
          <div className="wraper">
            <Spacer />
            <div className="team">
              {teamMem.map(team => (
                <div className="team__mem" key={team.node.id}>
                  <div className="team__mem__img">
                    <Img
                      fluid={
                        team.node.acf.image.localFile.childImageSharp.fluid
                      }
                    />
                  </div>
                  <div className="team__mem__bio">
                    <h3>{team.node.acf.title}</h3>
                    <div className="team__mem__bio__name">
                      <h4>{team.node.acf.name} </h4>
                      <a
                        href={team.node.acf.instagram_link}
                        aria-label={`a link to ${
                          team.node.acf.name
                        }'s Instagram`}
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href={team.node.acf.face_book_link}
                        aria-label={`a link to ${
                          team.node.acf.name
                        }Facebook's `}
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                      </a>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: team.node.acf.bio }}
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
    allWordpressAcfTeamMember {
      edges {
        node {
          id
          acf {
            title
            name
            face_book_link
            instagram_link
            bio
            image {
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
    allWordpressPage(filter: { title: { regex: "/Team/" } }) {
      edges {
        node {
          title
          acf {
            banner {
              hero_text
              cta
              image {
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
export default Team;
