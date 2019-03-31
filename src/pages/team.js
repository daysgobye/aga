import React, { Component } from 'react';
import Img from "gatsby-image";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'
import Banner from '../components/banner/banner'


class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log(
            this.props
        );

    }
    render() {
        const teamMem = this.props.data.allWordpressAcfTeamMember.edges
        const data = this.props.data.allWordpressPage.edges[0].node
        console.log(teamMem);


        return (
            <Layout>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <Banner
                    btnText="Contact Us"
                    linkPage="/"
                    title={data.acf.banner.hero_text}
                    cta={data.acf.banner.cta}
                    sides={true}
                    img={data.acf.banner.image.localFile.childImageSharp.fluid}
                >

                </Banner>
                <Content>
                    <div className="team">

                        {teamMem.map(team =>
                            (
                                <div className="team__mem" key={team.node.id}>
                                    <div className="team__mem__img">
                                        <Img fluid={team.node.acf.image.localFile.childImageSharp.fluid} />
                                    </div>
                                    <div className="team__mem__bio">
                                        <p>{team.node.acf.bio}</p>
                                    </div>
                                </div>
                            )
                        )}
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
      allWordpressPage(filter: {title: {regex: "/Team/"}}) {
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