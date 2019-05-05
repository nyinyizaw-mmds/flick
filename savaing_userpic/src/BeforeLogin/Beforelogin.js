import React from 'react'
import './before.css'
import SignupForm from '../Components/SignupForm/SignupForm'
import SigninForm from '../Components/SigninForm/SigninForm'

class Beforelogin extends React.Component{
    constructor() {
		super();
		this.state = {
            shown: true,
            shown1:true
		};
	}	
	
	toggle() {
		this.setState({
			shown: !this.state.shown
		});
    }
    
    toggle2() {
		this.setState({
			shown1: !this.state.shown1
		});
	}
		
	
    render(){ 
        // var shown = {
		// 	display: this.state.shown ? "block" : "none"
		// };
		
		var hidden = {
			display: this.state.shown ? "none" : "block"
		}
        
        var hidden1 = {
			display: this.state.shown1 ? "none" : "block"
		}
        const style= {
        opacity:'1',
        width:'200px',
        height:'50px',
        color:'#F8FC83',
        background:'transparent',
        borderRadius:'50px',
        marginLeft:'450px',
        marginTop:'150px'
             }

             const login={
                 marginTop:'150px',
                 width:'200px',
                 height:'50px',
                 color:'#F8FC83',
                 background:'transparent',
                 borderRadius:'50px',
                 marginLeft:'15px'
             }
            
        return(
           
        <React.Fragment>
            <div class="one">
            <div class="rain"> 
                <div class="row">
                    <ceter><h2>Flickr App</h2></ceter>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-lg-6 col-md-6">
                        <button class="btn btn-lg" style={style} onClick={this.toggle.bind(this)}>SignUp</button>
                        <div id="signup" style={hidden}>
                            <SignupForm/>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-6 col-md-6">
                        <button class="btn btn-lg " style={login} onClick={this.toggle2.bind(this)}>Login</button>
                        <div id="signin" style={hidden1}>
                            <SigninForm/>
                        </div>
                    </div>
                </div>
                </div>.
                </div>
                const mountNode = document.getElementById('signup');
                 const mountNode2 = document.getElementById('signin');
        </React.Fragment>
       
        )
       
       

    }
}


export default Beforelogin