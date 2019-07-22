import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout/layout";
import Content from "../components/utility/Content/Content";
import SEO from "../components/seo";
import Banner from "../components/banner/banner";
import Spacer from "../components/spacer/spacer";
import Signup from "../components/page_bottom_signup/page_signup";
import ClassCard from "../components/classCard/classCard";

//styles
import "../components/styles/masterclasses.sass";

class Masterclasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: null,
      oneIsOpen: false,
      openIndex: null,
      classes: [],
      mainHeaderLoaded: false,
      subHeaderLoaded: false,
      cardsLoaded: false
    };
    this.checkOutRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.props.data);

    const tempClass = this.props.data.allWordpressAcfMasterClass.edges.map(
      c => {
        return { ...c, isOpen: false };
      }
    );
    this.setState({ window: window, classes: tempClass });
    setTimeout(() => {
      this.loadMainHeader();
    }, 400);
    setTimeout(() => {
      this.loadSubHeader();
    }, 1400);
    setTimeout(() => {
      this.loadCards();
    }, 1600);
    // process.nextTick(() => {
    //   this.state.window.Snipcart.subscribe("item.adding", (ev, item, items) => {
    //     // this.checkOutRef.current.click();
    //     setTimeout(() => {
    //       this.checkOutRef.current.click();
    //     }, 1000);
    //     ev.preventDefault();
    //   });
    // });
    // this.state.window.Snipcart.subscribe("item.adding", (ev, item, items) => {
    //   this.checkOutRef.current.click();
    //   // ev.preventDefault();
    // });
  }
  addToCart = mc => {
    console.log("runnig");

    const item = {
      id: mc.node.wordpress_id,
      name: mc.node.acf.card.class_name,
      url: "http://thepastryacademy.com/shopProducts/",
      price: mc.node.acf.dropdown.price,
      stackable: false
    };
    this.state.window.Snipcart.api.items.add(item);
    process.nextTick(() => {
      setTimeout(() => {
        this.checkOutRef.current.click();
      }, 1400);
    });
    // this.state.window.Snipcart.subscribe("item.adding", (ev, item, items) => {
    //   this.checkOutRef.current.click();
    //   // ev.preventDefault();
    // });
  };
  loadMainHeader = () => {
    this.setState({
      mainHeaderLoaded: true
    });
  };
  loadSubHeader = () => {
    this.setState({
      subHeaderLoaded: true
    });
  };
  loadCards = () => {
    this.setState({
      cardsLoaded: true
    });
  };
  openDropDown = index => {
    console.log("opening");
    const tempClasses = [...this.state.classes];
    if (this.state.openIndex != null) {
      tempClasses[this.state.openIndex].isOpen = false;
    }
    const tempClass = { ...this.state.classes[index] };
    tempClass.isOpen = !tempClass.isOpen;
    if (index == this.state.openIndex) {
      tempClass.isOpen = false;
      index = null;
    }
    tempClasses[index] = tempClass;
    this.setState({
      isOpen: tempClass.isOpen,
      openIndex: index,
      classes: tempClasses
    });
  };
  render() {
    const data = this.props.data.allWordpressPage.edges[0].node;
    const masterclass = this.state.classes;
    return (
      <Layout>
        <SEO page="Masterclasses at The Pastry Academy" />

        <Content>
          <div className="masterclass">
            <div className="pageinfo">
              <h2 className={`${this.state.mainHeaderLoaded ? " loaded" : ""}`}>
                {data.acf.banner.banner_header}
              </h2>
              <div
                className={`page__text masterclass__text
              ${this.state.subHeaderLoaded ? " loaded" : ""}`}
                dangerouslySetInnerHTML={{
                  __html: data.acf.banner.banner_subheader
                }}
              />
              <hr
                className={`page__hr
              ${this.state.subHeaderLoaded ? " loaded" : ""}`}
              />
            </div>
            <Spacer />
            <div
              className={`masterclass__container ${
                this.state.cardsLoaded ? " loaded" : ""
              }`}
            >
              {masterclass.map((m, index) => (
                <ClassCard
                  m={m}
                  title={m.node.acf.card.class_name}
                  startDate={m.node.acf.card.class_start_date}
                  endDate={m.node.acf.card.class_end_date}
                  year={m.node.acf.card.calendar_year}
                  chefName={m.node.acf.card.chef_name}
                  instagramLink={m.node.acf.card.instagram_link}
                  leftImage={
                    m.node.acf.card.banner_image.left_image.localFile
                      .childImageSharp.fluid
                  }
                  leftAltText={m.node.acf.card.banner_image.left_image.alt_text}
                  rightImage={
                    m.node.acf.card.banner_image.right_image.localFile
                      .childImageSharp.fluid
                  }
                  rightAltText={
                    m.node.acf.card.banner_image.right_image.alt_text
                  }
                  aboutChef={m.node.acf.dropdown.about_the_chef}
                  aboutClass={m.node.acf.dropdown.about_the_class}
                  price={m.node.acf.dropdown.price}
                  className={index}
                  index={index}
                  isOpen={m.isOpen}
                  toggleOpen={this.openDropDown}
                  addToCart={this.addToCart}
                  icon={
                    this.props.data.siteSettings.edges[0].node.acf.footer
                      .instagram_icon
                  }
                />
              ))}
            </div>
          </div>
          {masterclass.map((m, index) => (
            <button
              key={index}
              className="snipcart-add-item visuallyhidden"
              data-item-name={m.node.acf.card.class_name}
              data-item-id={m.node.wordpress_id}
              data-item-url={"http://thepastryacademy.com/masterclasses"}
              data-item-price={m.node.acf.dropdown.price}
            >
              <a
                href="#"
                data-item-name={m.node.acf.card.class_name}
                data-item-id={m.node.wordpress_id}
                data-item-url={"http://thepastryacademy.com/masterclasses"}
                data-item-price={m.node.acf.dropdown.price}
              >
                {m.node.acf.card.class_name}
              </a>
            </button>
          ))}
          <button
            className="snipcart-checkout visuallyhidden"
            ref={this.checkOutRef}
          />
        </Content>
        <Spacer />
      </Layout>
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
    siteSettings: allWordpressPage(
      filter: { title: { regex: "/Whole Site Settings/" } }
    ) {
      edges {
        node {
          acf {
            footer {
              instagram_icon {
                alt_text
                source_url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 100) {
                      src
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

export default Masterclasses;
