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
          btnText="View FAQ"
          linkPage="/"
          title={data.acf.banner.hero_text}
          cta={data.acf.banner.cta}
          sides={false}
          img={data.acf.banner.image.localFile.childImageSharp.fluid}
        >

        </BackgroundBanner>
        <Content>
          <div className="wrapper">
            <h3 className="pagetitle">Pastry Academy by Amauy Guichon</h3>
            <div className="overview">
              <div className="overview__card">
                <h4>Curriculum Overview</h4>
                <p dangerouslySetInnerHTML={{ __html: data.acf.curriculum_overview }}></p>
                <div className="overview__card__info">
                  <div className="overview__card__info__data">
                    <h4>Location</h4>
                    <p>Las Vegas, NV</p>
                  </div>
                  <div className="overview__card__info__data">
                    <h4>Course Length</h4>
                    <p>{courses.length} Weeks</p>
                  </div>
                  <div className="overview__card__info__data">
                    <h4>Class Size</h4>
                    <p>
                      {data.acf.class_size}
                    </p>
                  </div>
                </div>

              </div>
              <div className="overview__image">
                <Img fluid={data.acf.image.localFile.childImageSharp.fluid} />
              </div>
            </div>
            <div className="weeks">
              <h3>Course Overview</h3>
              {courses.map(course =>
                (
                  <div className="weeks__single" key={course.node.id}>
                    <h4> {course.node.title}</h4>
                    <h5>{course.node.acf.week_focus}</h5>
                    <p dangerouslySetInnerHTML={{ __html: course.node.acf.summary }}></p>
                  </div>
                )
              )}
            </div>

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