import React from 'react' 
import './search.css'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import UploadImage from '../Components/Image/UploadImage'
import ArticleDetailList from '../Components/ArticleList/ArticleDetailList'
import ArticleList from '../Components/ArticleList/ArticleList'
import DeleteArticle from '../Components/ArticleList/DeleteArticle'
import SearchList from './SearchList'
import { connect } from 'react-redux';
import { signOutEvent } from '../Actions/UserActions'


class SearchBar extends React.Component{
  constructor(props){
    super(props)
    
  }
    render(){
        return(
            <Router>
              <nav class="crumbs">
                  <ol>
                      <li class="crumb">
                        <Link style={{color:'#DAD6D6'}} to='/home'>Home</Link>
                      </li>
                      <li class="crumb" style={{marginLeft:'0px'}}><SearchList/></li>
                      <li class="crumb">
                      <a onClick={this.props.signOutEvent} href="" 
                      style={{marginLeft:'20px',color:'white'}}>
                        Sign Out
                      </a>
                      {/* <Link to='/' style={{marginLeft:'20px',color:'white'}}>Logout</Link> */}
                      </li>
                  </ol>
              </nav>
           
             <section>
                <div class="row" style={{marginLeft:'50%'}}>
                  
                   <UploadImage />
               
                </div>
              </section>
         
        {/* <Route path='/search' component={SearchBar} /> */}
        {/* <Route path='/upload' component={UploadImage}/> */}
          
              <section>
                <div class="row">
                <ArticleList/>
                </div>
              </section>
       
       </Router>
     
        )
    }
}

const mapDispatchToProps ={
  signOutEvent
}
export default connect(null,mapDispatchToProps)(SearchBar)