import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux'
import Beforelogin from './BeforeLogin/Beforelogin'
import Afterlogin from './AfterLogin/Afterlogin'

import Login from './Components/SigninForm/SigninForm'

class App extends React.Component {
 
  render() {
      // const login = this.props.currentUser.id
      // console.log('cur',login)

      // if(login !== undefined){
      //   return (
      //   <Afterlogin />
      //   )
      // }
    return(
       

        <Router>
           <Route
            path="/"
            exact
            component={Beforelogin}
          />
            
           
            <Route
            path="/home"
            exact
            component={Afterlogin}
          />


            
        </Router>
    )

  }
}


const mapStateToProps = state =>({
  currentUser :state.currentUser
})


export default connect(mapStateToProps)(App)