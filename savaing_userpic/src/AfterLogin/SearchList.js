import React from 'react'
import { connect } from  'react-redux'
import SeriesList from './SeriesList'
import firebase from '../Utilities/firebase'
import {fetchArticles} from '../Actions/FileAction'
import Loader from '../Components/Loader'

class SearchList extends React.Component{

    constructor(props){
        super(props);
        this.props.fetchArticles()
        this.state ={
            series:[],
            seriesName:'',
            isfetching:false
        }
    }
        handlechange = (e) =>{
            this.setState({seriesName:e.target.value,isfetching:true})
            const files = this.props.files;
            const result = files.map(item => item.title)
            console.log('reslultlist',result)
            if(`files=$e.target.value`){
               
                  this.setState({
                    series:files,
                    isfetching:false
                  })
            }

        }
    
    render(){
        console.log('finalres',this.state.isfetching)
        const search = {
            width:'600px',
            marginTop:'-2px',
            marginLeft:'150px'
        }

        const {series,seriesName,isfetching} = this.state;
        return(
            <React.Fragment>
                <input type="text" style={search}  
                onChange={this.handlechange} id="seriesName"
                placeholder="Search"></input>
                <button class="btn btn-sm btn-success">Search</button>
                {
                    !isfetching && series.length === 0 && seriesName.trim() !== ``
                    &&
                    <p>No TV series is found with in this name</p>
                }

                {
                     isfetching && <Loader />
                }

                {
                     !isfetching && <SeriesList list={this.state.series}/>
                 }
            </React.Fragment>

            
          
        )
    }
}

const mapStateToProps = state =>({
    files:state.files
})

const mapDispatchToProps = {
    fetchArticles
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchList)