import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
  import ArticleDetailList from "./ArticleDetailList";
  import DeleteArticle from './DeleteArticle'
  import FavArticle from './FavArticle'
  

export default function Article(props) {
    const item = props.message;
    console.log('imagename',item);
    const key = props.key;
   /// console.log(key.id);
    console.log(props.ownmessage);

   
    return (
   <Router>
     <br></br>
        <div key={item.id}>
            <br></br>
                {
                    item.image && 
                    <Link to={"/articles/"+item.id}>
                      <img src={item.image} alt="message content" 
                      class="img img-responsive"
                      style={{width:'300px',height:'300px',zIndex:'-1',padding:'20px',marginLeft:'15px'}}/>
                    </Link>
                      // <a href={"#popup1/"+item.id} class="button"><img src={item.image} alt="message content" 
                      // class="img img-responsive"
                      //  style={{width:'300px',height:'300px',zIndex:'-1',padding:'20px',marginLeft:'15px'}}/>
                      //  </a>
              
                   // <h4>{item.created_by}</h4>
                   
                }
               
        </div>
        {/* <div id="{popup1/+item.id}" class="overlay">
          <div class="popup">
          
            <a class="close" href="#">&times;</a>
            <div class="content" key={item.id}>
               <ArticleDetailList item={props.message}/>
            </div>
          </div>
        </div> */}

        <Route path="/articles/:id" exact component={ArticleDetailList} />  
        <Route
              path="/articles/delete/:id"
              exact
              component={DeleteArticle}
            />
        <Route 
          path="/articles/fav/:id"
          exact 
          component={FavArticle}
          />

        </Router>
    )
}
