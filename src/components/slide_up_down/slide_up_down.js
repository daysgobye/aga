import React, { Component } from 'react'
// import ReactGA from 'react-ga'

//slide up slide down plugin
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

//images
import arrowIcon from '../../images/arrow-icon-services.svg'

class SlideUpDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }
    componentDidUpdate() {
    }
    toggleSlide() {
        this.setState({ open: !this.state.open })
    }
    handleClick() {
        this.toggleSlide()
        // this.logEvent()
    }
    //   logEvent() {
    //     ReactGA.event({
    //       category: 'Service Click',
    //       action: 'User clicked on Service Item',
    //     })
    // }
    render() {
        return (
            <div className="faq__section__right__slide">
                <div
                    className="faq__section__right__slide__title"
                    onClick={this.handleClick.bind(this)}
                >
                    <h4>{this.props.name}</h4>
                    <img
                        className={this.state.open ? 'expanded' : ''}
                        src={arrowIcon}
                        alt="icon of an arrow"
                    />
                </div>
                <SlideDown>
                    {this.state.open ? (
                        <p dangerouslySetInnerHTML={{ __html: this.props.desc }} />
                    ) : null}
                </SlideDown>
            </div>
        )
    }
}

export default SlideUpDown
