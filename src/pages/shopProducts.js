import React, { Component } from "react";
class ShopProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const masterclass = this.props.data.allWordpressAcfMasterClass.edges;
    return (
      <div>
        {masterclass.map((m, index) => (
          <button
            key={index}
            className="snipcart-add-item visuallyhidde"
            data-item-name={m.node.acf.card.class_name}
            data-item-id={m.node.wordpress_id}
            data-item-url={"http://thepastryacademy.com/shopProducts/"}
            data-item-price={m.node.acf.dropdown.price}
          >
            <a
              href="#"
              data-item-name={m.node.acf.card.class_name}
              data-item-id={m.node.wordpress_id}
              data-item-url={"http://thepastryacademy.com/shopProducts/"}
              data-item-price={m.node.acf.dropdown.price}
            >
              {m.node.acf.card.class_name}
            </a>
          </button>
        ))}
      </div>
    );
  }
}
export const query = graphql`
  query {
    allWordpressPage(filter: { title: { regex: "/master class page/" } }) {
      edges {
        node {
          title
          acf {
            banner {
              banner_header
              banner_subheader
              banner_image {
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
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
    allWordpressAcfMasterClass(
      sort: { fields: [acf___card___date], order: ASC }
    ) {
      edges {
        node {
          wordpress_id
          acf {
            card {
              date
              class_length
              class_start_date
              class_end_date
              calendar_year
              instagram_link
              class_name
              chef_name
              banner_image {
                banner_text
                left_image {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                        src
                      }
                    }
                  }
                }
                right_image {
                  alt_text
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_noBase64
                        src
                      }
                    }
                  }
                }
              }
            }
            dropdown {
              about_the_chef
              about_the_class
              price
            }
          }
        }
      }
    }
  }
`;

export default ShopProducts;
