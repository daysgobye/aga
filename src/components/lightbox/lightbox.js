import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import Img from "gatsby-image";
import "./lightbox.sass"

class LightBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
        }
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div className="lightbox">
                {this.props.photos.map((img, index) => (
                    <div className="lightbox__single" onClick={() => this.setState({ isOpen: true, photoIndex: index })} key={index}>
                        <Img
                            fluid={
                                img.node.acf.image.localFile.childImageSharp.fluid
                            }
                            alt={img.node.acf.image.alt_text}

                        />
                    </div>
                ))}
                {isOpen && (
                    <Lightbox
                        mainSrc={this.props.photos[photoIndex].node.acf.image.localFile.url}
                        nextSrc={this.props.photos[(photoIndex + 1) % this.props.photos.length].node.acf.image.localFile.url}
                        prevSrc={this.props.photos[(photoIndex + this.props.photos.length - 1) % this.props.photos.length].node.acf.image.localFile.url}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + this.props.photos.length - 1) % this.props.photos.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % this.props.photos.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default LightBox;