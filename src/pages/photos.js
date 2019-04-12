import React, { Component } from "react";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Content from "../components/utility/Content/Content";
import "../components/styles/photos.sass";
import Signup from "../components/page_bottom_signup/page_signup";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Spacer from "../components/spacer/spacer";
import xIcon from "../images/x.svg";
import LightBox from '../components/lightbox/lightbox'

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
      selectedImage: null
    };
  }

  render() {
    const photos = this.props.data.allWordpressAcfPhoto.edges;
    const data = this.props.data.allWordpressPage.edges[0].node;
    const { selectedImage, showLightbox } = this.state;
    console.log(photos);

    return (
      <Layout>
        <SEO
          page="Photo Gallery"
          description="See what you will learn to create."
        />

        <Content>
          <div className="wraper">
            <Spacer />
            <div className="pageinfo">
              <h3>{data.acf.page_headding}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: data.acf.page_description }}
              />
              <hr />
            </div>
            <Spacer />
            <div className="photos">
              <LightBox
                photos={photos}
              />
              {/* {photos.map(photo => (
                <div
                  className="photos__single"
                  key={photo.node.id}
                  onClick={() =>
                    this.setState({ showLightbox: true, selectedImage: photo })
                  }
                >
                  <div className="photos__single__gats">
                    <Img
                      fluid={
                        photo.node.acf.image.localFile.childImageSharp.fluid
                      }
                      alt={photo.node.acf.image.alt_text}
                    />
                  </div>
                </div>
              ))} */}
            </div>
            <Spacer />
            <Signup />
          </div>
        </Content>
        {showLightbox && (
          <Dialog className="dialog">
            <div className="light">
              <div className="light__image">
                <Img
                  fluid={
                    selectedImage.node.acf.image.localFile.childImageSharp.fluid
                  }
                  alt={selectedImage.node.acf.image.alt_text}
                />
              </div>
              <button
                aria-label={"close light box"}
                type="button"
                onClick={() => this.setState({ showLightbox: false })}
              >
                {/* <img src={xIcon} alt="x icon" /> */}
                close
              </button>
            </div>
          </Dialog>
        )}
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allWordpressPage(filter: { title: { regex: "/Photos/" } }) {
      edges {
        node {
          acf {
            page_headding
            page_description
          }
        }
      }
    }
    allWordpressAcfPhoto {
      edges {
        node {
          acf {
            image {
              alt_text
              localFile {
                url
                childImageSharp {
                  fluid(maxWidth: 1500) {
                     ...GatsbyImageSharpFluid_noBase64
                    src
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
