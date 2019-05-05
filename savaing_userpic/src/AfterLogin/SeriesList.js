import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
  import { connect } from 'react-redux';

{/* <Link to={"/articles/"+this.props.article.id}>{this.props.article.title} </Link> */}

const SeriesItem = ({ series }) => (
    <li >
       
        <Link to={"/articles/search/"+series.id} style={{color:'black'}}>
           {series.title}
        </Link>
       
       
    </li>
)

const SeriesList = (props) =>{
    console.log('ser',props.list)
    const receive = props.list;
   // const result = receive.map(item => item);
    console.log('ress',receive);
    const articles =props.articles;
    const art = articles.map(res => res);
    console.log('arrrr',art);
    return(
        <div>
            <ul style={{listStyle:'none'}}>
                {props.list.map(series => (
                    <SeriesItem  series={series} key={series.id}/>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state =>({
    articles:state.files
})

export default connect(mapStateToProps)(SeriesList)