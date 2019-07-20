import React, { Component } from "react";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: null
    };
    this.checkOutRef = React.createRef();
  }
  componentDidMount() {
    console.log(window.Snipcart.api.items);
    this.setState({ window: window });
  }
  addToCart = mc => {
    console.log("runnig");

    const item = {
      id: mc.node.wordpress_id,
      name: mc.node.acf.card.class_name,
      url: "http://thepastryacademy.com/masterclassesb",
      price: mc.node.acf.dropdown.price,
      stackable: false
    };
    this.state.window.Snipcart.api.items.add(item);
    setTimeout(() => {
      this.checkOutRef.current.click();
    }, 700);
  };
  render() {
    const data = this.props.data.allWordpressPage.edges[0].node;
    const masterclass = this.props.data.allWordpressAcfMasterClass.edges;
    return (
      <div>
        {masterclass.map(mc => (
          <div>
            {mc.node.acf.card.class_name}
            <button
              //   className="snipcart-checkout"
              style={{ background: "teal" }}
              onClick={() => this.addToCart(mc)}
            >
              buy now
            </button>
          </div>
        ))}
        <button
          className="snipcart-checkout visuallyhidden"
          ref={this.checkOutRef}
        >
          {" "}
          checkout
        </button>
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
                localFile {
                  childImageSharp {
                    fluid {
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
    allWordpressAcfMasterClass {
      edges {
        node {
          wordpress_id
          acf {
            card {
              class_length
              class_start_date
              class_end_date
              calendar_year
              instagram_link
              class_name
              banner_image {
                banner_text
                left_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                right_image {
                  localFile {
                    childImageSharp {
                      fluid {
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
export default Test;
