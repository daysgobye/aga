import React, { Component } from 'react';
import Img from "gatsby-image";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'
import BackgroundBanner from '../components/background_banner/background_banner'
import "../components/styles/program.sass"

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    const courses = this.props.data.allWordpressWpCourseWeek.edges

    const data = this.props.data.allWordpressPage.edges[0].node

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <BackgroundBanner
          btnText="Contact Us"
          linkPage="/"
          title={data.acf.banner.hero_text}
          cta={data.acf.banner.cta}
          sides={true}
          img={data.acf.banner.image.localFile.childImageSharp.fluid}
        >

        </BackgroundBanner>
        <Content>
          <div className="team">

            {courses.map(course =>
              (
                <div key={course.node.id}>
                  <h3> {course.node.title}</h3>
                  <h4>{course.node.acf.week_focus}</h4>
                  <p dangerouslySetInnerHTML={{ __html: course.node.acf.summary }}></p>
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
    allWordpressWpCourseWeek{
        edges{
          node{
            title
            id
            acf{
              week_focus
              summary
            }
          }
        }
      }
      allWordpressPage(filter: {title: {regex: "/Program/"}}) {
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
              curriculum_overview
              class_size
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
`;
export default Program;