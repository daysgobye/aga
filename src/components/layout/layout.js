import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import "../base.sass"
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(filter: {title: {regex: "/Whole Site Settings/"}}) {
          edges {
            node {
              acf {
                footer {
                  facebook_link
                  linkedin_link
                  phone_number
                  email
                  site_title
                  site_sub_title
                  instagram_link
                }
                main_logo {
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
    `}
    render={data => (
      <>
        <Header siteTitle={data.allWordpressPage.edges[0].node.acf.footer.site_title} subTitle={data.allWordpressPage.edges[0].node.acf.footer.site_sub_title} logo={data.allWordpressPage.edges[0].node.acf.main_logo.localFile.childImageSharp.fluid} />
        <div>
          <main>{children}</main>
          <Footer siteTitle={data.allWordpressPage.edges[0].node.acf.footer.site_title} subTitle={data.allWordpressPage.edges[0].node.acf.footer.site_sub_title} logo={data.allWordpressPage.edges[0].node.acf.main_logo.localFile.childImageSharp.fluid} email={data.allWordpressPage.edges[0].node.acf.footer.email} phone={data.allWordpressPage.edges[0].node.acf.footer.phone_number}
            links={[{ name: data.allWordpressPage.edges[0].node.acf.footer.instagram_link, icon: "" }, { name: data.allWordpressPage.edges[0].node.acf.footer.facebook_link, icon: "" }, { name: data.allWordpressPage.edges[0].node.acf.footer.linkedin_link, icon: "" },]} />
        </div>
      </>
    )}
  />



)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
