import React from 'react'
import './after.css'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
import firebase from '../Utilities/firebase'
import { connect } from 'react-redux';
import SearchBar from './SearchBar'

const firestore = firebase.firestore();
class Afterlogin extends React.Component{
    render(){
        const user = firebase.auth().currentUser;
        //const is_typing = this.state.settings['typing'] && this.state.settings['typing'].status;
        return(
            
            <React.Fragment>
                {!user && <Redirect to="/"/>}
              <SearchBar/>
               
            </React.Fragment>
        
             
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
  })

export default connect(mapStateToProps)(Afterlogin)