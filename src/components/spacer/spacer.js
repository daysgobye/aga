import React, { Component } from 'react';
import "./spacer.sass"
class Spacer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className={this.props.small ? 'spacer small' : 'spacer'}></div>);
    }
}

export default Spacer;