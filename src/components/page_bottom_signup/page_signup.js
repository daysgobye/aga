import React, { Component } from 'react';
import McSignUp from '../mc_sign_up/mc_sign_up'
import "./page_signup.sass"
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="page__sign">
                <hr />
                <h3>
                    Join the Waiting List
            </h3>
                <p>
                    Sign Up Below to be notified when enrollment begins. Classes begin Octboer 2019.
            </p>
                <McSignUp></McSignUp>
            </div>
        );
    }
}

export default Signup;