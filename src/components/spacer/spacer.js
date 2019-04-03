import React, { Component } from 'react';
import "./spacer.sass"
class Spacer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="spacer"></div>);
    }
}

export default Spacer;