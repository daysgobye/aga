import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Content from "../components/utility/Content/Content";
import BackgroundBanner from "../components/background_banner/background_banner";
import "../components/styles/enroll.sass";
import ButtonRound from "../components/buttonRound/buttonRound";
import McSignUp from "../components/mc_sign_up/mc_sign_up";
import Spacer from "../components/spacer/spacer";
import Signup from "../components/page_bottom_signup/page_signup";

class Enroll extends Component {
  constructor(props) {
    super(props);
					this.state = {
						apiKeys : {
											first:"1GmTArtSq1orebYwuSdCK8nMZcLlHS",
											second:"pTJMBBMt5etMhC6qs4KxIS0fxafXqH",
											third:"JGRxWqjrg7Xopfkz7A4MdKZzzAdjaf",
										  fourth:"O6Ymcb01dHjPy8CVlsSSsZeVAKfX8J",
									},
									pickedKey : "",
									startDate: new Date(),
									spots : {
										first: "",
										second: "",
										third: "",
										fourth: ""
									}
					};
					this.pickKey=this.pickKey.bind(this)
					this.handleChange = this.handleChange.bind(this);
  }

				componentDidMount(){
				fetch(`https://playground.purpleandbold.net/wp-json/wp/v2/pages/${this.props.data.allWordpressPage.edges[0].node.wordpress_id}`)
  				.then(function(response) {
    			return response.json();
  				})
  				.then((res)=> {
									const spots = {
										first: res.acf.sign_up_form.first_spots_left,
										second: res.acf.sign_up_form.second_spots_left,
										third: res.acf.sign_up_form.third_spots_left,
										fourth: res.acf.sign_up_form.forth_spots_left
									}
									this.setState({spots:spots})

  				});
				}

				handleChange(date) {
    			this.setState({
      			startDate: date
   				});
  			}
				
				pickKey(pick){
					console.log(this)
					this.setState({pickedKey : pick})
					console.log(this.state)
				}
  render() {
    // const courses = this.props.data.allWordpressWpCourseWeek.edges

    const data = this.props.data.allWordpressPage.edges[0].node;

    return (
      <Layout>
        <SEO
          page="Enroll"
          description="Enroll now and take the first steps to starting your new career."
        />
        <div className="enroll">
          <BackgroundBanner
            btnText="View Program Details"
            linkPage="program"
            title={data.acf.banner.hero_text}
            subtitle={data.acf.banner.sub_hero_text}
            subSubHeadding={data.acf.banner.sub_headding}
            cta={data.acf.banner.cta}
            sides={false}
            img={data.acf.banner.image.localFile.childImageSharp.fluid.src}
          />

          <Content>
            <div className="wrapper">
              <Spacer />
              <div className="signup">
                <h3> {data.acf.sign_up_form.headding} </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.acf.sign_up_form.description
                  }}
                />
                <div className="signup__buttons">
                  <div className="signup__buttons__button">
                    <button onClick={()=>this.pickKey(this.state.apiKeys.first)}>October 2019</button>
                    <div className="signup__buttons__button__info">
                      <p>Oct 10 - Dec 20</p>
                      <p>Seats Open: 2</p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button  onClick={()=>this.pickKey(this.state.apiKeys.second)}>January 2020</button>
                    <div className="signup__buttons__button__info">
                      <p>Jan 6 - May 22</p>
                      <p>Seats Open: 6</p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button  onClick={()=>this.pickKey(this.state.apiKeys.third)}>March 2020</button>
                    <div className="signup__buttons__button__info">
                      <p>Mar 16 - May 22</p>
                      <p>Seats Open: 11</p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button  onClick={()=>this.pickKey(this.state.apiKeys.fourth)}>May 2020</button>
                    <div className="signup__buttons__button__info">
                      <p>May 25 - Jul 31</p>
                      <p>Seats Open: 14</p>
                    </div>
                  </div>
                </div>
                {/* <McSignUp /> */}
							
              </div>
						<div className="signup__app">
							<form method="POST" action={`https://formfor.site/send/${this.state.pickedKey}`}>
						<label>
						First
						<input type="text"/>
						</label>
						<label>
						Last
						<input type="text"/>
						</label>
						<label>
						Date Of Birth
					    <DatePicker
        			selected={this.state.startDate}
        			onChange={this.handleChange}
      				/>
						</label>
						<label>
						Email
						<input type="email"/>
						</label>
						
						<label>
						Phone Number
						<input type="text"/>
						</label>
						<label>
						Gender
						 <select>
  							 <option value="male">Male</option>
  							 <option value="female">Female</option>
 								 <option value="other">Other</option>
							</select> 
						</label>
						<label>
						Country of Citizenship
						<input type="text"/>
						</label>
						<label>
						Where Do You Currently Live?
						<input type="text"/>
						</label>
						<label>
						Do you Understand English Well And Feel Comfottable Following The Course Material in English
						        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="yes"
              checked={true}
              className="form-check-input"
            />
            Yes
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="No"
              className="form-check-input"
            />
						No
          </label>
        </div>
						</label>
						<label>
						Years of Experience
						 <select>
  							 <option value="no_experience">No Experience</option>
  							 <option value="1-2_years">1-2 Years</option>
 								 <option value="3-5_years">3-5 Years</option>
 								 <option value="more_then_5_years">More than 5 years</option>
							</select> 
						</label>
						<label>
						Education Level
						 <select>
  							 <option value="none">None</option>
  							 <option value="high_school">High School Diploma</option>
 								 <option value="associates">Associates Degree</option>
 								 <option value="bachelors">Bachelors Degree</option>
								 <option value="masters/doctorate">Masters/Doctorate Degree</option>
							</select> 
						</label>
 								<button type="submit">Send</button>
							</form>		
						</div>
              <div className="enroll">
                <Spacer />
                <h3>Enrollment Process</h3>
                <div className="enroll__body">
                  <div className="enroll__body__steps">
                    <div className="enroll__body__steps__single">
                      <h4>1. {data.acf.enrollment_process.step_1_title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.acf.enrollment_process.step_1_description
                        }}
                      />
                      <hr />
                    </div>
                    <div className="enroll__body__steps__single">
                      <h4>2. {data.acf.enrollment_process.step_2_title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.acf.enrollment_process.step_2_description
                        }}
                      />
                      <hr />
                    </div>
                    <div className="enroll__body__steps__single">
                      <h4>3. {data.acf.enrollment_process.step_3_title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.acf.enrollment_process.step_3_description
                        }}
                      />
                      <hr />
                    </div>
                    <div className="enroll__body__steps__single">
                      <h4>4. {data.acf.enrollment_process.step_4_title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.acf.enrollment_process.step_4_description
                        }}
                      />
                      <hr />
                    </div>
                    <div className="enroll__body__steps__single">
                      <h4>5. {data.acf.enrollment_process.step_5_title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.acf.enrollment_process.step_5_description
                        }}
                      />
                      <hr />
                    </div>
										
                    <div className="enroll__body__steps__single">
                      <h4>6. {data.acf.enrollment_process.step_6_title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.acf.enrollment_process.step_6_description
                        }}
                      />
                      <hr />
                    </div>
                  </div>
                  <div className="enroll__body__image">
                    <div className="enroll__body__image__gats">
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
      </Layout>
    );
  }
}

export const query = graphql`
  query {
	 allWordpressPage(filter: {title: {regex: "/Enrollv2/"}}) {
    edges {
      node {
			wordpress_id
        acf {
          banner {
            hero_text
            cta
            image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
          sign_up_form {
            headding
            description
            first_month_avaible
            first_avaible_start_date
            first_avaible_end_date
            second_month_avaible
            second_avaible_start_date
            second_avaible_end_date
            Third_month_avaible
            third_avaible_start_date
            third_avaible_end_date
            forth_month_avaible
            forth_avaible_start_date
            forth_avaible_end_date
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
            step_6_title
            step_6_description
            image {
              localFile {
                childImageSharp {
                  fluid {
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
