import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
  //import ArticleDetailList from "./ArticleDetailList";

export default function Article(props) {
    const item = props.message;
    const id = props.key
    console.log(props.ownmessage);

   // const id = this.props.match.params.id;
    return (
   <React.Fragment>
        <div class="col-sm-3 col-md-3" key={id}>
                {
                    item.image && 
                       
                      <img src={item.image} alt="message content" 
                      class="img img-responsive"
                       style={{width:'250px',height:'250px'}}/>
                    
                }
                {
                    item.created_by &&

                    <h5>created_by {item.created_by} </h5>
                }
                
        </div>
        </React.Fragment>
    )
}
