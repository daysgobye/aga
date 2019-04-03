import React, { Component } from 'react';
import Img from "gatsby-image";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'
import Banner from '../components/banner/banner'
import "../components/styles/contact.sass"
import Signup from '../components/page_bottom_signup/page_signup'
import Spacer from '../components/spacer/spacer'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    const data = this.props.data.allWordpressPage.edges[0].node
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Banner
          btnText="View FAQ"
          linkPage="faq"
          title={data.acf.banner.hero_text}
          cta={data.acf.banner.cta}
          sides={false}
          img={data.acf.banner.image.localFile.childImageSharp.fluid}
        >
        </Banner>
        <Content>
          <div className="wraper">
            <Spacer></Spacer>
            <div className="contact">
              <div className="contact__info">
                <Img fluid={data.acf.contact_block.image.localFile.childImageSharp.fluid} />
                <p dangerouslySetInnerHTML={{ __html: data.acf.contact_block.address }}
                ></p>
                <p>Phone:{data.acf.contact_block.phone_number}</p>
                <p>Email: <span className="contact__info__email"><a href={`mailto:${data.acf.contact_block.email}`}>{data.acf.contact_block.email}</a></span></p>
              </div>
              <hr />
              <div className="contact__form">
                <form action="https://getsimpleform.com/messages?form_api_token=716e8ed73218e778b78c65a6dfd94862" method="post">
                  {/* <!-- the redirect_to is optional, the form will redirect to the referrer on submission --> */}
                  <input type='hidden' name='redirect_to' value='localhost:8000/contact' />
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
                    message
    <textarea name="message" id="" cols="30" rows="10" placeholder=""></textarea>
                  </label>
                  <button type="submit">Send message</button>
                </form>

              </div>
            </div>
            <div className="pageimage">
              <Spacer></Spacer>
              <Img fluid={data.acf.page_image.localFile.childImageSharp.fluid} />
            </div>
            <Spacer></Spacer>
            <Signup></Signup>
          </div>
        </Content>
      </Layout>
    );
  }
}

export const query = graphql`
query {
    allWordpressPage(filter: {title: {regex: "/Contact/"}}) {
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
              contact_block{
                phone_number
                address
                email
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
              page_image{
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