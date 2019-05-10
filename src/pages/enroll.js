import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
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
									},
									formOpen: false,
									resBack: false
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
									this.setState({spots:spots,resBack:true})

  				});
				}

				handleChange(date) {
    			this.setState({
      			startDate: date
   				});
  			}
				
				pickKey(pick){
					this.setState({pickedKey : pick, formOpen: !this.state.formOpen})
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
                    <button onClick={()=>this.pickKey(this.state.apiKeys.first)}>{data.acf.sign_up_form.first_month_avaible}</button>
                    <div className="signup__buttons__button__info">
                      <p>{ data.acf.sign_up_form.first_avaible_start_date } - {data.acf.sign_up_form.first_avaible_end_date}</p>
                      <p>Seats Open: {this.state.resBack ? this.state.spots.first : data.acf.sign_up_form.first_spots_left}</p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button  onClick={()=>this.pickKey(this.state.apiKeys.second)}>{data.acf.sign_up_form.second_month_avaible  }</button>
                    <div className="signup__buttons__button__info">
                      <p>{ data.acf.sign_up_form.second_avaible_start_date } - { data.acf.sign_up_form.second_avaible_end_date }</p>
                      <p>Seats Open: {this.state.resBack ? this.state.spots.second : data.acf.sign_up_form.second_spots_left}</p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button  onClick={()=>this.pickKey(this.state.apiKeys.third)}>{ data.acf.sign_up_form.Third_month_avaible }</button>
                    <div className="signup__buttons__button__info">
                      <p>{ data.acf.sign_up_form.third_avaible_start_date } - { data.acf.sign_up_form.third_avaible_end_date }</p>
                      <p>Seats Open: {this.state.resBack ? this.state.spots.third : data.acf.sign_up_form.third_spots_left}</p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button  onClick={()=>this.pickKey(this.state.apiKeys.fourth)}>{ data.acf.sign_up_form.forth_month_avaible }</button>
                    <div className="signup__buttons__button__info">
                      <p>{ data.acf.sign_up_form.forth_avaible_start_date } - { data.acf.sign_up_form.forth_avaible_end_date }</p>
                      <p>Seats Open: {this.state.resBack ? this.state.spots.fourth : data.acf.sign_up_form.forth_spots_left}</p>
                    </div>
                  </div>
                </div>
                {/* <McSignUp /> */}
							
              </div>
						<div className="signup__app">
						<SlideDown className={'my-dropdown-slidedown'}>
						{this.state.formOpen ? (
							<form method="POST" action={`https://usebasin.com/f/${this.state.pickedKey}`}>
						<label>
						First
						<input type="text" name="first name"/>
						</label>
						<label>
						Last
						<input type="text" name="last name"/>
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
						<input type="email" name="email"/>
						</label>
						
						<label>
						Phone Number
						<input type="text" name="phone number"/>
						</label>
						<label>
						Gender
						 <select name="Gender">
  							 <option value="male">Male</option>
  							 <option value="female">Female</option>
 								 <option value="other">Other</option>
							</select> 
						</label>
						<label>
						Country of Citizenship
						<input type="text" name="Country of Citizenship"/>
						</label>
						<label>
						Where Do You Currently Live?
						<input type="text" name="where do you live"/>
						</label>
						<label>
						Do you Understand English Well And Feel Comfottable Following The Course Material in English
						        <div className="form-check">
          <label>
            <input
              type="radio"
              name="Understand English"
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
              name="Understand English"
              value="No"
              className="form-check-input"
            />
						No
          </label>
        </div>
						</label>
						<label>
						Years of Experience
						 <select name="years of Experience">
  							 <option value="no_experience">No Experience</option>
  							 <option value="1-2_years">1-2 Years</option>
 								 <option value="3-5_years">3-5 Years</option>
 								 <option value="more_then_5_years">More than 5 years</option>
							</select> 
						</label>
						<label>
						Education Level
						 <select name="Education Level">
  							 <option value="none">None</option>
  							 <option value="high_school">High School Diploma</option>
 								 <option value="associates">Associates Degree</option>
 								 <option value="bachelors">Bachelors Degree</option>
								 <option value="masters/doctorate">Masters/Doctorate Degree</option>
							</select> 
						</label>
 								<input type="submit" ref={this.submitRef} value="submit" />
							</form>	
						) :null }
						</SlideDown>
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
						first_spots_left
						second_spots_left
						third_spots_left
						forth_spots_left
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
