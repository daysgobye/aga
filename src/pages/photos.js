import React, { Component } from 'react';
import Img from "gatsby-image";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Content from '../components/utility/Content/Content'
import "../components/styles/photos.sass"
import Signup from '../components/page_bottom_signup/page_signup'
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import Spacer from '../components/spacer/spacer'

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLightbox: false,
            selectedImage: null,
        }
    }


    render() {
        const photos = this.props.data.allWordpressAcfPhoto.edges
        const data = this.props.data.allWordpressPage.edges[0].node
        const { selectedImage, showLightbox } = this.state;
        console.log(photos);

        return (
            <Layout>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

                <Content>
                    <div className="wraper">
                        <Spacer></Spacer>
                        <div className="pageinfo">
                            <h3>{data.acf.page_headding}</h3>
                            <p dangerouslySetInnerHTML={{ __html: data.acf.page_description }}></p>
                            <hr />
                        </div>
                        <Spacer></Spacer>
                        <div className="photos">
                            {photos.map(photo =>
                                (
                                    <div className="photos__single" key={photo.node.id} onClick={() => this.setState({ showLightbox: true, selectedImage: photo })}>
                                        <div className="photos__single__gats">
                                            <Img
                                                fluid={photo.node.acf.image.localFile.childImageSharp.fluid}
                                            />
                                        </div>
                                    </div>
                                )

                            )}
                        </div>
                        <Spacer></Spacer>
                        <Signup></Signup>

                    </div>
                </Content>
                {showLightbox && (
                    <Dialog>
                        <Img fluid={selectedImage.node.acf.image.localFile.childImageSharp.fluid} />
                        <button type="button" onClick={() => this.setState({ showLightbox: false })}>
                            Close
          </button>
                    </Dialog>
                )}
            </Layout>
        );
    }
}

export const query = graphql`
query {
    allWordpressPage(filter: {title: {regex: "/Photos/"}}) {
        edges {
          node {
            acf {
              page_headding
              page_description
            }
          }
        }}
        allWordpressAcfPhoto {
            edges {
              node {
                acf {
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
export default Photos;