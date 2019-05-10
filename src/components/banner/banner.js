// props
// btnText str
// linkPage str
// title str
// subtitle str
// cta str
// sides bool
// img obj gatsby image
import React, { Component } from "react";
import Content from "../utility/Content/Content";
import "./banner.sass";
import ButtonRound from "../buttonRound/buttonRound";
import Img from "gatsby-image";
import { SSL_OP_PKCS1_CHECK_1 } from "constants";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.imgRef = React.createRef();
    // this.imgWidth = this.imgWidth.bind(this);
    this.bannerRef = React.createRef();
    this.trigger = this.trigger.bind(this);
    this.dreaction = this.dreaction.bind(this);
    this.SubtitleCheck = this.SubtitleCheck.bind(this);
  }
  static defaultProps = {
    btnText: "btn text",
    linkPage: "/",
    title: " page title",
    subtitle: <span>&#8203;</span>,
    subSubHeadding: <span>&#8203;</span>,
    cta: " lorem shit",
    sides: true,
    img: {
      aspectRatio: 0.993920972644377,
      src: "/static/b21ae5216543821d08c7da6bb11ab302/10566/bio_pic_2.png",
      srcSet:
        "/static/b21ae5216543821d08c7da6bb11ab302/45802/bio_pic_2.png 150w,\n/static/b21ae5216543821d08c7da6bb11ab302/7aaac/bio_pic_2.png 300w,\n/static/b21ae5216543821d08c7da6bb11ab302/10566/bio_pic_2.png 327w",
      sizes: "(max-width: 327px) 100vw, 327px"
    }
  };
  componentDidMount() {
    if (window.matchMedia("(min-width: 650px)").matches) {
      this.setState({ phone: false });
      // this.imgWidth();
    } else {
      this.setState({ phone: true });
    }
    window.addEventListener("resize", this.trigger);
    setTimeout(() => {
      this.loadBannerImage();
    }, 100);
    setTimeout(() => {
      this.loadMainHeader();
    }, 200);
    setTimeout(() => {
      this.loadSubHeader();
    }, 1200);
    setTimeout(() => {
      this.loadButton();
    }, 1800);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.trigger);
  }
  loadBannerImage() {
    this.setState({
      imgLoaded: true
    });
  }
  loadMainHeader() {
    this.setState({
      mainHeaderLoaded: true
    });
  }
  loadSubHeader() {
    this.setState({
      subHeaderLoaded: true
    });
  }
  loadButton() {
    this.setState({
      buttonLoaded: true
    });
  }
  trigger() {
    // this.forceUpdate()
    if (window.matchMedia("(min-width: 650px)").matches) {
      this.setState({ phone: false });
      // this.imgWidth();
    } else {
      this.setState({ phone: true });
    }
  }
  checkPhone(swap) {
    if (this.state.phone) {
      return "column";
    } else {
      return swap;
    }
  }
  checkMobileText(textAlign) {
    if (this.state.phone) {
      return "center";
    } else {
      return textAlign;
    }
  }
  checkMobileButton(alignment) {
    if (this.state.phone) {
      return "center";
    } else {
      return alignment;
    }
  }
  SubtitleCheck(prop) {
    const span = "span";
    // check if this is the defult prop
    if (prop.type === span) {
      // check if we are on a phone
      if (this.state.phone) {
        //   if we are a default prop and its a phone then we do not have a string so its less of a gap
        return "";
      } else {
        return prop;
      }
    } else {
      return prop;
    }
  }
  dreaction(el) {
    if (!this.props.sides) {
      switch (el) {
        case "body":
          return this.checkPhone("row-reverse");
          break;
        case "text":
          return this.checkMobileText("left");
          break;
        case "wrap":
          return this.checkMobileButton("flex-start");
          break;
        default:
          console.log(
            " you called dreaction function in the banner component and did not pass it somthing you needed to please check it  "
          );
      }
    } else {
      switch (el) {
        case "body":
          return this.checkPhone("row");
          break;
        case "text":
          return this.checkMobileText("right");
          break;
        case "wrap":
          return this.checkMobileButton("flex-end");
          break;
        default:
          console.log(
            " you called dreaction function in the banner component and did not pass it somthing you needed to please check it  "
          );
      }
    }
  }
  imgWidth() {
    const oldHeight = this.imgRef.current.offsetHeight;
    const oldWidth = this.imgRef.current.offsetWidth;
    const newWidth = (305 * oldWidth) / oldHeight;
    if (oldHeight > 425) {
      this.imgRef.current.style.width = `${newWidth / 4}%`;
      this.bannerRef.current.style.height = "425px";
    }
  }
  render() {
    return (
      <div className=" banner" ref={this.bannerRef}>
        <Content>
          <div
            className="banner__col"
            style={{
              flexDirection: this.dreaction("body")
            }}
          >
            <div
              className="banner__col__one"
              // style={{
              //   alignItems: "flex-end",
              //   justifyContent: "flex-end",
              //   alignContent: "flex-end",
              //   background: "green"
              // }}
            >
              <div className="banner__col__one__image">
                <div
                  className="banner__col__one__image__container"
                  ref={this.imgRef}
                >
                  <Img fluid={this.props.img} alt={this.props.heroimgalt} />
                </div>
              </div>
            </div>

            <div
              className="banner__col__two"
              style={{
                alignItems: this.dreaction("wrap")
              }}
            >
              <div className="banner__col__two__top">
                <h2
                  className={`${this.state.mainHeaderLoaded ? " loaded" : ""}`}
                  style={{
                    textAlign: this.dreaction("text")
                  }}
                >
                  {this.props.title}
                </h2>
                <h3
                  style={{
                    textAlign: this.dreaction("text")
                  }}
                >
                  {this.SubtitleCheck(this.props.subtitle)}
                </h3>
                <h4
                  className={`${this.state.mainHeaderLoaded ? " loaded" : ""}`}
                  style={{
                    textAlign: this.dreaction("text")
                  }}
                >
                  {this.SubtitleCheck(this.props.subSubHeadding)}
                </h4>
              </div>
              <div className="banner__col__two__bottom">
                <div
                  className={`background__banner__col__two__bottom__text
                ${this.state.subHeaderLoaded ? " loaded" : ""}`}
                  dangerouslySetInnerHTML={{ __html: this.props.cta }}
                  style={{
                    textAlign: this.dreaction("text")
                  }}
                />
                <div
                  className={`background__banner__col__two__bottom__btn
                   ${this.state.buttonLoaded ? " loaded" : ""}`}
                >
                  <ButtonRound
                    innerText={this.props.btnText}
                    action={this.props.linkPage}
                    type="gatsbylink"
                    passedState={""}
                    padding="4.5px 20px"
                    fsize="0.85"
                    pos={this.dreaction("wrap")}
                  />
                </div>
              </div>
            </div>
          </div>
        </Content>
        <hr />
      </div>
    );
  }
}

export default Banner;
