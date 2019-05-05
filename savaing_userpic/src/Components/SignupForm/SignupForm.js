import React from 'react'
import {
    Redirect,
 
  } from "react-router-dom";
import './signupForm.css'
import { connect } from 'react-redux'
import { registerUserEvent } from '../../Actions/UserActions'


class SignupForm extends React.Component{

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
        this.props.registerUserEvent(
            this.email.current.value,
            this.password.current.value,
            this.successLogin,
            this.errorLogin
        );
    }

    render(){
        const color = {
            color:'#2BBFF5'
        }

        const form = {
            //backgroundColor:'transparent',
            height:'300px',
            border:'0px'
        }
        return(
            <form class="sign-in-form" onSubmit={this.handleOnSubmit}>
            
                {this.state.error.message && (<div> class="sign-in-error">{this.state.error.message}</div>)}
               <label>Email</label><input type="email" required ref={this.email} /><br />
                <label>Password</label><input type="password" required ref={this.password} /><br /> <br/>               
                <button type="submit" class="btn btn-sm btn-primary">Register</button>
            </form>
           
        )
    }
}

//export default SignupForm
const mapDispatchToProps = {
    registerUserEvent
}

export default  connect(null,mapDispatchToProps)(SignupForm)