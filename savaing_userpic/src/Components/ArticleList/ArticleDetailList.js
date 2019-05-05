import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import './Article.css';
import firebase from '../../Utilities/firebase'
import { connect } from 'react-redux';
import FavArticle from './FavArticle';
import DetailPage from './DetailPage'
import { deleteArticle } from '../../Actions/FileAction'
import CommentForm from  './CommentForm'


const firestore = firebase.firestore();
class ArticleDetailList extends React.Component{

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
      const id = this.props.match.params.id;
      //console.log('userid',user.email);
      const articles = this.state.messages.find(item => item.id == id && item.created_by == user.email);
      ////const result = articles.find(item => item.id=id);
     console.log('re',articles);
     // console.log('articlesss',articles)
   // const currentuser = articles.map(item => item);
   
     //console.log('currentuser',currentuser)
       
        let allowToDelete = false;
       
        if(user){
          if(articles){
            console.log(1);
            allowToDelete = true;
           
          }
          //console.log(1);
        }

        
        
     return (
       
        <React.Fragment>
          <br/>
            
          
          {this.state.messages.map(item => (
                  item.id==id && 
                     
                   
         <div class="overlay">
            <div class="popup">
              <Link to="/home" class="close">&times;</Link>
              <div class="row">
                <div class="col-sm-6">
                  <div class="content" key={item.id}>
                  <img src={item.image} style={{width:'350px',height:'250px'}}/><br/><br/>
                  {/* <Link to={"/articles/fav/"+item.id}>
                   <i class="fas fa-heart" style={{fontSize:'20px',color:'white'}}></i>
                  </Link> */}
                    <FavArticle id={item.id} />
                 
                    &nbsp;&nbsp;
                  { allowToDelete && (
                      <Link to={"/articles/delete/"+item.id} style={{color:'red'}}>
                        Delete
                      </Link>
                  ) }
                </div>
                </div>
                <div class="col-sm-6" style={{marginTop:'15px'}}>
                  <h6>Upload by:<span>{item.created_by}</span></h6>
                  <h6>title:<span>{item.title}</span></h6>
                </div>
              </div>

            </div>
        </div>
                    
                    ))}
        
           <br></br>
        {/* { allowToDelete && (
            <Link to={`/home/articles/delete/${currentuser.id}`}>Delete</Link>
        ) } */}
         <hr />
        {/* <CommentForm article =  {currentArticle}/>
        {
          currentArticle.comments == undefined ? "no comment":

          
          currentArticle.comments.map( (item,index) => <div key={index}>{item.comment} by {item.author.username}</div>)
        } */}

   
      </React.Fragment>
     );
    }
}

const mapStateToProps = (state) => ({
    user: state.currentUser,
  })

// const mapDispatchToProps = {
 
//   deleteArticle
// }

export default connect (mapStateToProps)(ArticleDetailList)