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
                  instagram_link
                  instagram_icon {
                    localFile {
                      childImageSharp {
                        fluid {
                           ...GatsbyImageSharpFluid_noBase64
                        }
                      }
                    }
                  }
                  facebook_icon {
                    localFile {
                      childImageSharp {
                        fluid {
                           ...GatsbyImageSharpFluid_noBase64
                        }
                      }
                    }
                  }
                  linked_in_icon {
                    localFile {
                      childImageSharp {
                        fluid {
                           ...GatsbyImageSharpFluid_noBase64
                        }
                      }
                    }
                  }
                }
                site_title
                site_sub_title
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
        <Header siteTitle={data.allWordpressPage.edges[0].node.acf.site_title} subTitle={data.allWordpressPage.edges[0].node.acf.site_sub_title} logo={data.allWordpressPage.edges[0].node.acf.main_logo.localFile.childImageSharp.fluid} />
        <div>
          <main>{children}</main>
          <Footer siteTitle={data.allWordpressPage.edges[0].node.acf.site_title} subTitle={data.allWordpressPage.edges[0].node.acf.site_sub_title} logo={data.allWordpressPage.edges[0].node.acf.main_logo.localFile.childImageSharp.fluid} email={data.allWordpressPage.edges[0].node.acf.footer.email} phone={data.allWordpressPage.edges[0].node.acf.footer.phone_number}
            links={[{ name: data.allWordpressPage.edges[0].node.acf.footer.instagram_link, icon: data.allWordpressPage.edges[0].node.acf.footer.instagram_icon.localFile.childImageSharp.fluid }, { name: data.allWordpressPage.edges[0].node.acf.footer.facebook_link, icon: data.allWordpressPage.edges[0].node.acf.footer.facebook_icon.localFile.childImageSharp.fluid }, { name: data.allWordpressPage.edges[0].node.acf.footer.linkedin_link, icon: data.allWordpressPage.edges[0].node.acf.footer.linked_in_icon.localFile.childImageSharp.fluid },]} />
        </div>
      </>
    )}
  />



)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
