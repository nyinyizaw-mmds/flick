import React from 'react'
import {
    Redirect,
 
  } from "react-router-dom";

import firebase from '../../Utilities/firebase'
import { connect } from 'react-redux';
import { loginUserEvent } from '../../Actions/UserActions'



class SigninForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: {},
            login: false
        }
        this.email = React.createRef();
        this.password = React.createRef();
    }
    successLogin = () => {
        this.setState({
            login: true
        })
    }
    errorLogin = (error) => {
        this.setState({
            error: error
        })
    }
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.loginUserEvent(
            this.email.current.value,
            this.password.current.value,
            this.successLogin,
            this.errorLogin
        );
    }

    render() {
        return (
            <form className="sign-in-form" onSubmit={this.handleOnSubmit}>
                {this.state.login && <Redirect to="/home"></Redirect>}
                {this.state.error.message && (<div className="sign-in-error">{this.state.error.message}</div>)}
                <label>Email </label><input type="email" required ref={this.email} /><br />
                <label>Password </label><input type="password" required ref={this.password} /><br />
                <button type="submit">Login</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    loginUserEvent
}

export default connect(null, mapDispatchToProps)(SigninForm);