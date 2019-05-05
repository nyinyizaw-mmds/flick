import React from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
import firebase from '../../Utilities/firebase'
import { fetchFiles } from '../../Actions/FileAction'
import Article from './Article'
import ArticleDetailList from './ArticleDetailList'

const firestore = firebase.firestore();
class ArticleList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          messages: [],
          settings: []
        }    
    
        firestore.collection('message').onSnapshot(snapshot => {
          const messages = [];
          snapshot.docs.forEach(item => {
            const message = item.data();
            message.id = item.id;
            messages.push(message);
          })
       
          this.setState({
            messages: messages
          })
        })
    }
    render(){
      console.log('message' ,this.state.messages);
        const user = firebase.auth().currentUser;
        return(
            <React.Fragment>
           
                
                    {this.state.messages.map(item => (
                     <Article key={item.id} message={item} />
                     
                    ))}
                
            
             
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
  })
export default connect(mapStateToProps)(ArticleList)