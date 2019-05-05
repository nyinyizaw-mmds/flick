import React from 'react'
import './signupForm.css'
import { connect } from 'react-redux'
import { insertUser } from '../Actions/UserActions'
import './form.css'

class SignupForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            confirm_password:'',
           
            completeRegister: false
        }
    
    }
   
    handleChange = (e) =>{
       this.setState({
            [e.target.id]:e.target.value,
          
       })
    }

    handleSubmit = (e) =>{
       e.preventDefault();
       console.log(this.state);
        if(this.state.password===this.state.confirm_password){
            this.props.insertUser(
                {
                    username:this.state.username,
                    email:this.state.email,
                    password:this.state.password,
                    
                },
                ()=>{
                    this.setState = (e) =>({
                        completeRegister:true,
                        [e.target.id]:'',
                    });
                }
            )
        }
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
               <label>Email</label><input type="email" required ref={this.email} /><br />
                <label>Password</label><input type="password" required ref={this.password} /><br /> <br/>               
                <button type="submit" class="btn btn-sm btn-primary">Register</button>
            </form>
           
        )
    }
}

//export default SignupForm
const mapDispatchToProps = {
    insertUser
}

export default  connect(null,mapDispatchToProps)(SignupForm)