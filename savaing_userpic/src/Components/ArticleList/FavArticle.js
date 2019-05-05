import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
  import firebase from '../../Utilities/firebase'

  const firestore = firebase.firestore();
  class FavArticle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          messages: [],
          
        }    
    
        firestore.collection('message').onSnapshot(snapshot => {
          const messages = [];
          snapshot.docs.forEach(item => {
            const message = item.data();
            message.id = item.id;
            messages.push(message);
          })

          console.log('messageitem',messages);
       
          this.setState({
            messages: messages
          })
        })
    }

      render(){
        const user = firebase.auth().currentUser;
        console.log('curr',user.uid);
        const id = this.props.id;
        console.log('me',id);
        //  const id = this.props.match.params.id;
        //  const message = this.state.messages.find(item => item.id==id);
        //  let changecolor =false;
        //  if(message){
        //    changecolor = true;
        // }
          return(
         
             
            <a href={id}>
             <i class="fas fa-heart" style={{fontSize:'20px',color:'white'}}></i>
            </a> 
             
       
          )
      }
  }

  export default FavArticle