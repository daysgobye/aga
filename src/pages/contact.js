import React, { Component } from "react";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Content from "../components/utility/Content/Content";
import Banner from "../components/banner/banner";
import "../components/styles/contact.sass";
import Signup from "../components/page_bottom_signup/page_signup";
import Spacer from "../components/spacer/spacer";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: ""
    };
  }
  componentDidMount() {
    this.setState({ path: window.location.href });
  }

  render() {
    const data = this.props.data.allWordpressPage.edges[0].node;
    return (
      <Layout>
        <SEO
          page="Contact"
          description="Contact the team at Pastry Academy by Amaury Guichon, we are happy to answer any questions you may have."
        />
        <Banner
          btnText="View FAQ"
          linkPage="faq"
          title={data.acf.banner.hero_text}
          cta={data.acf.banner.cta}
          sides={false}
          img={data.acf.banner.image.localFile.childImageSharp.fluid}
          heroimgalt={data.acf.banner.image.alt_text}
        />
        <Content>
          <div className="wraper">
            <Spacer />
            <div className="contact">
              <div className="contact__info">
                <div className="contact__info__image">
                  <div className="contact__info__image__container">
                    <Img
                      fluid={
                        data.acf.contact_block.image.localFile.childImageSharp
                          .fluid
                      }
                      alt={data.acf.contact_block.image.alt_text}
                    />
                  </div>
                </div>

                <p
                  dangerouslySetInnerHTML={{
                    __html: data.acf.contact_block.address
                  }}
                />
                <p>Phone: {data.acf.contact_block.phone_number}</p>
                <p>
                  Email:{" "}
                  <span className="contact__info__email">
                    <a href={`mailto:${data.acf.contact_block.email}`}>
                      {data.acf.contact_block.email}
                    </a>
                  </span>
                </p>
              </div>
              <hr />
              <div className="contact__form">
                <form
                  action="https://getsimpleform.com/messages?form_api_token=716e8ed73218e778b78c65a6dfd94862"
                  method="post"
                >
                  {/* <!-- the redirect_to is optional, the form will redirect to the referrer on submission --> */}
                  <input
                    type="hidden"
                    name="redirect_to"
                    value={this.state.path}
                  />
                  {/* <!-- all your input fields here.... --> */}
                  <label>
                    <input type="text" placeholder="Name" />
                  </label>
                  <label>
                    <input type="email" placeholder="Email" />
                  </label>
                  <label>
                    <input type="tel" placeholder="Phone Number" />
                  </label>
                  <label>
                    Message
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="10"
                      placeholder=""
                    />
                  </label>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
            <div className="pageimage">
              <Spacer />
              <Img
                fluid={data.acf.page_image.localFile.childImageSharp.fluid}
                alt={data.acf.page_image.alt_text}
              />
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
    allWordpressPage(filter: { title: { regex: "/Contact/" } }) {
      edges {
        node {
          title
          acf {
            banner {
              hero_text
              cta
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
            contact_block {
              phone_number
              address
              email
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
            page_image {
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
export default Contact;
