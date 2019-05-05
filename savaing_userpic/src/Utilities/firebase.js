import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBXQf7qgrbqDB0gWrsFrU5MIrtTI19wYhQ",
    authDomain: "flickrapp-54a6c.firebaseapp.com",
    databaseURL: "https://flickrapp-54a6c.firebaseio.com",
    projectId: "flickrapp-54a6c",
    storageBucket: "flickrapp-54a6c.appspot.com",
    messagingSenderId: "165218345367"
  };
 
  export default firebase.initializeApp(config);