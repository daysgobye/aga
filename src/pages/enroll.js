import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      apiKeys: {
        first: "5a5fed2fc092",
        second: "1e88bb9db221",
        third: "97fa72a8b738",
        fourth: "2c487fa2f8bb",
        fifth: "7e3e6b08f263",
        sixth: "461bbe350877"
      },
      pickedKey: "",
      spots: {
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: "",
        sixth: ""
      },
      formOpen: false,
      resBack: false,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      days: [],
      years: [],
      buttonOne: false,
      buttonTwo: false,
      buttonThree: false,
      buttonFour: false,
      buttonFive: false,
      buttonSix: false,
      mobile: false,
      pickedSmester: ""
    };
    this.pickKey = this.pickKey.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.bday = React.createRef();
    this.monthRef = React.createRef();
    this.dayRef = React.createRef();
    this.yearRef = React.createRef();
    this.fillDates = this.fillDates.bind(this);
    this.fillMonths = this.fillMonths.bind(this);
    this.scrollRef = React.createRef();
    // this.selectButton = this.selectButton.bind(this);
  }

  componentDidMount() {
    fetch(
      `https://pa.purpleandbold.net/wp-json/wp/v2/pages/${
        this.props.data.allWordpressPage.edges[0].node.wordpress_id
      }`
    )
      .then(function(response) {
        return response.json();
      })
      .then(res => {
        const spots = {
          first: res.acf.sign_up_form.first_spots_left,
          second: res.acf.sign_up_form.second_spots_left,
          third: res.acf.sign_up_form.third_spots_left,
          fourth: res.acf.sign_up_form.forth_spots_left,
          fifth: res.acf.sign_up_form.fifth_spots_left,
          sixth: res.acf.sign_up_form.sixth_spots_left
        };
        this.setState({ spots: spots, resBack: true });
      });
    this.fillDates();
    if (window.location.hash) {
      toast.success(
        "Thank you for your application! We have received your submission and will review it shortly.",
        {
          autoClose: 45000,
          position: toast.POSITION.TOP_CENTER
        }
      );
    }
    console.log(window.location.hash);
  }
  fillDates() {
    console.log("filling dates");
    // this.fillMonths(1, 12);
    this.fillDays(1, 31);
    this.fillYears(1900, 2019);
  }
  fillMonths(low, high) {
    // console.log("filling months");
    const monthArray = [];
    let x = low;
    while (x <= high) {
      monthArray.push(x);
      x++;
    }
    // console.log("month array in function: " + monthArray);
    this.setState({
      months: monthArray
    });
    // console.log("month state: " + this.state.months);
  }
  fillDays(low, high) {
    const dayArray = [];
    let x = low;
    while (x <= high) {
      dayArray.push(x);
      x++;
    }
    this.setState({
      days: dayArray
    });
  }
  fillYears(low, high) {
    const yearArray = [];
    let x = low;
    while (x <= high) {
      yearArray.push(x);
      x++;
    }
    yearArray.reverse();
    this.setState({
      years: yearArray
    });
  }
  checkSpots(num) {
    if (parseInt(num) === 0) {
      return false;
    } else {
      return true;
    }
  }
  selectButton(num) {
    if (num === 1) {
      this.setState({
        buttonOne: true,
        buttonTwo: false,
        buttonThree: false,
        buttonFour: false,
        buttonFive: false,
        buttonSix: false
      });
    } else if (num === 2) {
      this.setState({
        buttonOne: false,
        buttonTwo: true,
        buttonThree: false,
        buttonFour: false,
        buttonFive: false,
        buttonSix: false
      });
    } else if (num === 3) {
      this.setState({
        buttonOne: false,
        buttonTwo: false,
        buttonThree: true,
        buttonFour: false,
        buttonFive: false,
        buttonSix: false
      });
    } else if (num === 5) {
      this.setState({
        buttonOne: false,
        buttonTwo: false,
        buttonThree: false,
        buttonFour: false,
        buttonFive: true,
        buttonSix: false
      });
    } else if (num === 6) {
      this.setState({
        buttonOne: false,
        buttonTwo: false,
        buttonThree: false,
        buttonFour: false,
        buttonFive: false,
        buttonSix: true
      });
    } else {
      this.setState({
        buttonOne: false,
        buttonTwo: false,
        buttonThree: false,
        buttonFour: false,
        buttonFive: false,
        buttonSix: false
      });
    }
  }
  handleChange() {
    const birthday = `${this.monthRef.current.value}-${
      this.dayRef.current.value
    }-${this.yearRef.current.value}`;
    this.bday.current.value = birthday;
  }

  pickKey(pick, spot, num, pickedSemester) {
    if (this.checkSpots(spot)) {
      this.setState({
        pickedKey: pick,
        formOpen: !this.state.formOpen,
        pickedSemester
      });
      if (!this.state.formOpen) {
        this.scrollRef.current.scrollIntoView({
          behavior: "smooth"
        });
      }
    } else {
      toast.error(
        "Oops! Looks like there are no seats available for that semester. Please select another.",
        {
          position: toast.POSITION.TOP_CENTER
        }
      );
    }

    setTimeout(() => {
      if (this.state.formOpen) {
        this.selectButton(num);
      } else {
        this.selectButton();
      }
    }, 100);
  }

  render() {
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
                    <button
                      className={`${
                        this.checkSpots(this.state.spots.first)
                          ? " "
                          : " class__full"
                      }${this.state.buttonOne ? "picked__btn" : ""}`}
                      onClick={() => {
                        this.pickKey(
                          this.state.apiKeys.first,
                          this.state.spots.first,
                          1,
                          data.acf.sign_up_form.first_month_avaible
                        );
                      }}
                    >
                      {data.acf.sign_up_form.first_month_avaible}
                    </button>
                    <div className="signup__buttons__button__info">
                      <p>
                        {data.acf.sign_up_form.first_avaible_start_date} -{" "}
                        {data.acf.sign_up_form.first_avaible_end_date}
                      </p>
                      <p>
                        Seats Open:{" "}
                        {this.state.resBack
                          ? this.state.spots.first === "0"
                            ? "full"
                            : this.state.spots.first
                          : data.acf.sign_up_form.first_spots_left === "0"
                          ? "full"
                          : this.state.spots.first}
                      </p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button
                      className={`${
                        this.checkSpots(this.state.spots.second)
                          ? " "
                          : " class__full"
                      }${this.state.buttonTwo ? "picked__btn" : ""}`}
                      onClick={() =>
                        this.pickKey(
                          this.state.apiKeys.second,
                          this.state.spots.second,
                          2,
                          data.acf.sign_up_form.second_month_avaible
                        )
                      }
                    >
                      {data.acf.sign_up_form.second_month_avaible}
                    </button>
                    <div className="signup__buttons__button__info">
                      <p>
                        {data.acf.sign_up_form.second_avaible_start_date} -{" "}
                        {data.acf.sign_up_form.second_avaible_end_date}
                      </p>
                      <p>
                        Seats Open:{" "}
                        {this.state.resBack
                          ? this.state.spots.second === "0"
                            ? "full"
                            : this.state.spots.second
                          : data.acf.sign_up_form.second_spots_left === "0"
                          ? "full"
                          : this.state.spot.second}
                      </p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button
                      className={`${
                        this.checkSpots(this.state.spots.third)
                          ? " "
                          : " class__full"
                      }${this.state.buttonThree ? "picked__btn" : ""}`}
                      onClick={() =>
                        this.pickKey(
                          this.state.apiKeys.third,
                          this.state.spots.third,
                          3,
                          data.acf.sign_up_form.Third_month_avaible
                        )
                      }
                    >
                      {data.acf.sign_up_form.Third_month_avaible}
                    </button>
                    <div className="signup__buttons__button__info">
                      <p>
                        {data.acf.sign_up_form.third_avaible_start_date} -{" "}
                        {data.acf.sign_up_form.third_avaible_end_date}
                      </p>
                      <p>
                        Seats Open:{" "}
                        {this.state.resBack
                          ? this.state.spots.third === "0"
                            ? "full"
                            : this.state.spots.third
                          : data.acf.sign_up_form.third_spots_left === "0"
                          ? "full"
                          : this.state.spots.third}
                      </p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button
                      className={`${
                        this.checkSpots(this.state.spots.fourth)
                          ? " "
                          : " class__full"
                      }${this.state.buttonFour ? "picked__btn" : ""}`}
                      onClick={() =>
                        this.pickKey(
                          this.state.apiKeys.fourth,
                          this.state.spots.fourth,
                          4,
                          data.acf.sign_up_form.forth_month_avaible
                        )
                      }
                    >
                      {data.acf.sign_up_form.forth_month_avaible}
                    </button>
                    <div className="signup__buttons__button__info">
                      <p>
                        {data.acf.sign_up_form.forth_avaible_start_date} -{" "}
                        {data.acf.sign_up_form.forth_avaible_end_date}
                      </p>
                      <p>
                        Seats Open:{" "}
                        {this.state.resBack
                          ? this.state.spots.fourth === "0"
                            ? "full"
                            : this.state.spots.fourth
                          : data.acf.sign_up_form.forth_spots_left === "0"
                          ? "full"
                          : this.state.spots.fourth}
                      </p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button
                      className={`${
                        this.checkSpots(this.state.spots.fifth)
                          ? " "
                          : " class__full"
                      }${this.state.buttonFive ? "picked__btn" : ""}`}
                      onClick={() =>
                        this.pickKey(
                          this.state.apiKeys.fifth,
                          this.state.spots.fifth,
                          5,
                          data.acf.sign_up_form.fifth_month_avaible
                        )
                      }
                    >
                      {data.acf.sign_up_form.fifth_month_avaible}
                    </button>
                    <div className="signup__buttons__button__info">
                      <p>
                        {data.acf.sign_up_form.fifth_avaible_start_date} -{" "}
                        {data.acf.sign_up_form.fifth_avaible_end_date}
                      </p>
                      <p>
                        Seats Open:{" "}
                        {this.state.resBack
                          ? this.state.spots.fifth === "0"
                            ? "full"
                            : this.state.spots.fifth
                          : data.acf.sign_up_form.fifth_spots_left === "0"
                          ? "full"
                          : this.state.spots.fifth}
                      </p>
                    </div>
                  </div>
                  <div className="signup__buttons__button">
                    <button
                      className={`${
                        this.checkSpots(this.state.spots.sixth)
                          ? " "
                          : " class__full"
                      }${this.state.buttonSix ? "picked__btn" : ""}`}
                      onClick={() =>
                        this.pickKey(
                          this.state.apiKeys.sixth,
                          this.state.spots.sixth,
                          6,
                          data.acf.sign_up_form.sixth_month_avaible
                        )
                      }
                    >
                      {data.acf.sign_up_form.sixth_month_avaible}
                    </button>
                    <div className="signup__buttons__button__info">
                      <p>
                        {data.acf.sign_up_form.sixth_avaible_start_date} -{" "}
                        {data.acf.sign_up_form.sixth_avaible_end_date}
                      </p>
                      <p>
                        Seats Open:{" "}
                        {this.state.resBack
                          ? this.state.spots.sixth === "0"
                            ? "full"
                            : this.state.spots.sixth
                          : data.acf.sign_up_form.sixth_spots_left === "0"
                          ? "full"
                          : this.state.spots.sixth}
                      </p>
                    </div>
                  </div>
                </div>
                <div ref={this.scrollRef} className="scrollto" />

                {/* <McSignUp /> */}
              </div>
              <div className="signup__app">
                <SlideDown className={"my-dropdown-slidedown"}>
                  {this.state.formOpen ? (
                    <div>
                      <h3>{this.state.pickedSemester} Application Form</h3>
                      <h4>The Pastry Academy by Amaury Guichon</h4>
                      <form
                        className="signup__app__form"
                        method="POST"
                        action={`https://usebasin.com/f/${
                          this.state.pickedKey
                        }`}
                      >
                        <label>
                          First Name
                          <input type="text" name="first name" />
                        </label>
                        <label>
                          Last Name
                          <input type="text" name="last name" />
                        </label>
                        <label>
                          Date Of Birth
                          <div className="date-pickers">
                            <select
                              name="Month"
                              className="month"
                              onChange={() => this.handleChange()}
                              ref={this.monthRef}
                            >
                              <option value="default" selected disabled hidden>
                                Month
                              </option>
                              {this.state.months.map(m => (
                                <option value={`${m}`}>{`${m}`}</option>
                              ))}
                            </select>
                            <select
                              name="Day"
                              className="day"
                              onChange={() => this.handleChange()}
                              ref={this.dayRef}
                            >
                              <option value="default" selected disabled hidden>
                                Day
                              </option>
                              {this.state.days.map(d => (
                                <option value={`${d}`}>{`${d}`}</option>
                              ))}
                            </select>
                            <select
                              name="Year"
                              className="year"
                              onChange={() => this.handleChange()}
                              ref={this.yearRef}
                            >
                              <option value="default" selected disabled hidden>
                                Year
                              </option>
                              {this.state.years.map(y => (
                                <option value={`${y}`}>{`${y}`}</option>
                              ))}
                            </select>
                          </div>
                          {/* <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            placeholderText="Click to select a date"
                          /> */}
                        </label>
                        <label>
                          Email
                          <input type="email" name="email" />
                        </label>

                        <label>
                          Phone Number
                          <input type="text" name="phone number" />
                        </label>
                        <label>
                          Gender
                          <select name="Gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="rather not say">
                              Rather not say
                            </option>
                          </select>
                        </label>
                        <label>
                          Country of Citizenship
                          <input type="text" name="Country of Citizenship" />
                        </label>
                        <label>
                          Where Do You Currently Live?
                          <input type="text" name="where do you live" />
                        </label>
                        <label className="radio">
                          Are you able to follow the course material in English?
                          <div className="form-radio">
                            <div className="form-check">
                              <label>
                                <input
                                  type="radio"
                                  name="Understand English"
                                  value="yes"
                                  checked={true}
                                  className="form-check-input"
                                />
                                <span>Yes</span>
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
                                <span>No</span>
                              </label>
                            </div>
                          </div>
                        </label>
                        <label>
                          Years of Experience
                          <select name="years of Experience">
                            <option value="none">No Experience</option>
                            <option value="1-2">1-2 Years</option>
                            <option value="3-5">3-5 Years</option>
                            <option value="5+">More than 5 years</option>
                          </select>
                        </label>
                        <label>
                          Education Level
                          <select name="Education Level">
                            <option value="none">None</option>
                            <option value="high school">
                              High School Diploma
                            </option>
                            <option value="associates">
                              Associates Degree
                            </option>
                            <option value="bachelors">Bachelors Degree</option>
                            <option value="masters/doctorate">
                              Masters/Doctorate Degree
                            </option>
                          </select>
                        </label>

                        <input
                          type="text"
                          ref={this.bday}
                          name="birth day"
                          aria-hidden="true"
                          className="bday visuallyhidden"
                        />
                        <div className="submit-button">
                          <input type="submit" value="Apply Now" />
                        </div>
                      </form>
                    </div>
                  ) : null}
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
        <ToastContainer />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allWordpressPage(filter: { title: { regex: "/Enrollv2/" } }) {
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
                    fluid(maxWidth: 5000) {
                      src
                      ...GatsbyImageSharpFluid_noBase64
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
              fifth_month_avaible
              fifth_avaible_start_date
              fifth_avaible_end_date
              fifth_spots_left
              sixth_month_avaible
              sixth_spots_left
              sixth_avaible_end_date
              sixth_avaible_start_date
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
