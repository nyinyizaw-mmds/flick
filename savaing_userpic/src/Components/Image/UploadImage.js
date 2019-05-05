import React from 'react';
//import './ImageUpload.css';
import firebase from '../../Utilities/firebase';
import { connect } from 'react-redux';

const firestore = firebase.firestore();
class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.imageFile = React.createRef();
    this.state={
      title:''
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
  } 

  addMessage = (url) => {
    
    firestore.collection('message')
      .add({
      
        image: url,
        created_by: this.props.user.email,
        user_id:this.props.user.uid,
        title:this.state.title
         // name:this.state.name,
       
      });
  }

  handleFileOnChange = () => {
    const file = this.imageFile.current.files[0];
     console.log(file);
    var storageRef = firebase.storage().ref();

    const filePath = 'message/images/' + file.name;
    const imageRef = storageRef.child(filePath);
    console.log('imageref',imageRef);

    imageRef
      .put(file)
      .then(() => {
        storageRef.child(filePath)
          .getDownloadURL().then(this.addMessage)
      })
      .catch(error => { console.log(error) });

  }

  render() {

    return (
      <div class="row">
          <form >
              <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" id="title" onChange={this.handleChange}/>
              </div>
              <div class="form-group">
              <input 
                ref={this.imageFile}
                onChange={this.handleFileOnChange}
                type="file" accept="image/*" />
              </div>
               

          </form>

      </div>
      
      // <div class="row">
      
      //     <input 
      //     ref={this.imageFile}
      //     onChange={this.handleFileOnChange}
      //     type="file" accept="image/*" />


      // </div>
     
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.currentUser,
})

export default connect(mapStateToProps)(UploadImage);