import React, { Component } from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'
import BackgroundBanner from "../components/background_banner/background_banner"
import "../components/styles/enroll.sass"
import ButtonRound from '../components/buttonRound/buttonRound'
import McSignUp from '../components/mc_sign_up/mc_sign_up'
import Spacer from '../components/spacer/spacer'

class Enroll extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        // const courses = this.props.data.allWordpressWpCourseWeek.edges

        const data = this.props.data.allWordpressPage.edges[0].node

        return (
            <Layout>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <BackgroundBanner
                    btnText="View Program Details"
                    linkPage="program"
                    title={data.acf.banner.hero_text}
                    subtitle={data.acf.banner.sub_hero_text}
                    subSubHeadding={data.acf.banner.sub_heading}
                    cta={data.acf.banner.cta}
                    sides={false}
                    img={data.acf.banner.image.localFile.childImageSharp.fluid}

                >

                </BackgroundBanner>
                <Content>
                    <div className="wraper">
                        <Spacer></Spacer>
                        <div className="signup">
                            <h3> {data.acf.sign_up_form.headding} </h3>
                            <p dangerouslySetInnerHTML={{ __html: data.acf.sign_up_form.description }}></p>
                            <McSignUp></McSignUp>
                        </div>
                        <div className="enroll">
                            <Spacer></Spacer>
                            <h3>Enrollment Process</h3>
                            <div className="enroll__body">

                                <div className="enroll__body__steps">
                                    <div className="enroll__body__steps__single">
                                        <h3>
                                            1.{data.acf.enrollment_process.step_1_title}
                                        </h3>
                                        <p dangerouslySetInnerHTML={{ __html: data.acf.enrollment_process.step_1_description }}></p>
                                        <hr />
                                    </div>
                                    <div className="enroll__body__steps__single">
                                        <h3>
                                            2.{data.acf.enrollment_process.step_2_title}
                                        </h3>
                                        <p dangerouslySetInnerHTML={{ __html: data.acf.enrollment_process.step_2_description }}></p>
                                        <hr />
                                    </div>
                                    <div className="enroll__body__steps__single">
                                        <h3>
                                            3.{data.acf.enrollment_process.step_3_title}
                                        </h3>
                                        <p dangerouslySetInnerHTML={{ __html: data.acf.enrollment_process.step_3_description }}></p>
                                        <hr />
                                    </div>
                                    <div className="enroll__body__steps__single">
                                        <h3>
                                            4.{data.acf.enrollment_process.step_4_title}
                                        </h3>
                                        <p dangerouslySetInnerHTML={{ __html: data.acf.enrollment_process.step_4_description }}></p>
                                        <hr />
                                    </div>
                                    <div className="enroll__body__steps__single">
                                        <h3>
                                            5.{data.acf.enrollment_process.step_5_title}
                                        </h3>
                                        <p dangerouslySetInnerHTML={{ __html: data.acf.enrollment_process.step_5_description }}></p>
                                        <hr />
                                    </div>
                                </div>
                                <div className="enroll__body__image">
                                    <div className="enroll__body__image__gats">
                                        <Img fluid={data.acf.enrollment_process.image.localFile.childImageSharp.fluid} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Spacer></Spacer>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export const query = graphql`
query {
    allWordpressPage(filter: {title: {regex: "/Enrol/"}}) {
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
              sign_up_form {
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
                step_5_title
                step_5_description
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
export default Enroll;
