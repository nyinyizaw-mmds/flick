import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
import { connect } from 'react-redux'

import { insertFile } from '../../Actions/FileAction'

class AddImage extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.title = React.createRef();
    //     this.file = React.createRef();
    //     this.state = {
    //       completeFile: false
    //     };
    // }

    // handleSubmit = (e) =>{
    //     e.preventDefault();
    //     const newFile = {
    //         title:this.title.current.value,
    //         file:this.file.current.value,
    //         created_by : this.props.currentUser.id,
    //         author : this.props.currentUser
    //     };
    //     this.props.insertFile( newFile , ()=>{
    //         this.setState({
    //             completeFile:true
    //         })
    //     })
    // }


    constructor(props)
    {
        super(props);
        this.state={
            title:'',
            file:'',
            url:'',
            created_by:'',
            author:'',
            completeFile: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleOnFileChange = (e) => {
        // let file = e.target.files[0];
        // let url = URL.createObjectURL(e.target.files[0])
        this.setState({
            file:e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }
    handleSubmit = (e) => {
       e.preventDefault();
       console.log(this.state)
       const newFile = {
                title:this.state.title,
               // file:this.state.file,
                url:this.state.url,
                created_by : this.props.currentUser.id,
                author : this.props.currentUser
            };
            this.props.insertFile( newFile , ()=>{
                this.setState({
                    completeFile:true
                })
            })
    }


   
    render(){

        const form = {
            width:'300px',
            background:'transparent',
            border:'0px'
        }


        console.log('imagetype',typeof(this.state.url))
        const login = this.props.currentUser;
        console.log('cc',login);
        if (this.state.completeFile) return <Redirect to="/" />;

        return(
            <React.Fragment>
                <form class="form-contorl" 
                onSubmit={this.handleSubmit} 
                style={form}>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input style={{color:'black'}} type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="file">Upload</label>
                        <input style={{color:'black'}} type="file" id="file" onChange={this.handleOnFileChange}/>
                    </div>
                     <button type="submit" class="btn btn-sm btn-success">Add</button>

                </form>
                <p>{this.state.title}</p>
                <p>{this.state.file.name} </p>
                <img src={this.state.url} />
            </React.Fragment>
           
        )
    }
}


const mapStateToProps = state =>({
    currentUser:state.currentUser
})


const mapDispatchToProps = {
    insertFile
}

export default connect(mapStateToProps,mapDispatchToProps)(AddImage)