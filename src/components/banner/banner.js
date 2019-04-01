// props
// btnText str
// linkPage str
// title str
// subtitle str
// cta str
// sides bool
// img obj gatsby image
import React, { Component } from 'react';
import Content from "../utility/Content/Content"
import "./banner.sass"
import ButtonRound from '../buttonRound/buttonRound'
import Img from "gatsby-image";


class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    static defaultProps = {
        btnText: "btn text",
        linkPage: "/",
        title: " page title",
        subtitle: (<span>&#8203;</span>),
        subSubHeadding: (<span>&#8203;</span>),
        cta: " lorem shit",
        sides: true,
        img: {
            "aspectRatio": 0.993920972644377,
            "src": "/static/b21ae5216543821d08c7da6bb11ab302/10566/bio_pic_2.png",
            "srcSet": "/static/b21ae5216543821d08c7da6bb11ab302/45802/bio_pic_2.png 150w,\n/static/b21ae5216543821d08c7da6bb11ab302/7aaac/bio_pic_2.png 300w,\n/static/b21ae5216543821d08c7da6bb11ab302/10566/bio_pic_2.png 327w",
            "sizes": "(max-width: 327px) 100vw, 327px"
        }
    }
    dreaction(el) {
        if (!this.props.sides) {
            switch (el) {
                case "body":
                    return "row-reverse"
                    break
                case "text":
                    return "left"
                    break
                case "wrap":
                    return "flex-start"
                    break
                default:
                    console.log(" you called dreaction function in the banner component and did not pass it somthing you needed to please check it  ")
            }

        } else {
            switch (el) {
                case "body":
                    return "row"
                    break
                case "text":
                    return "right"
                    break
                case "wrap":
                    return "flex-end"
                    break
                default:
                    console.log(" you called dreaction function in the banner component and did not pass it somthing you needed to please check it  ")
            }
        }
    }
    render() {
        return (
            <div className=" banner">
                <Content>

                    <div className="banner__col" style={{
                        flexDirection: this.dreaction("body")
                    }}>
                        <div className="banner__col__one">
                            <Img fluid={this.props.img} />
                        </div>
                        <div className="banner__col__two" style={{
                            alignItems: this.dreaction("wrap")
                        }}>
                            <h2 style={{
                                textAlign: this.dreaction("text")
                            }}>
                                {this.props.title}
                            </h2>
                            <h3>{this.props.subtitle}</h3>
                            <h4>{this.props.subSubHeadding}</h4>
                            <p dangerouslySetInnerHTML={{ __html: this.props.cta }} style={{
                                textAlign: this.dreaction("text")
                            }}></p>
                            <ButtonRound
                                innerText={this.props.btnText}
                                action={this.props.linkPage}
                                type="gatsbylink"
                                passedState={""}
                                padding='5px 30px'
                                fsize='1'
                            />
                        </div>
                    </div>
                </Content>
                <hr />
            </div>
        );
    }
}

export default Banner;