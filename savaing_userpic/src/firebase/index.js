  import firebase from 'firebase/app'
  import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDbLHsuohLNQgVU0ySWpqQ47SUOYUVzOoE",
    authDomain: "my-second-project-5acec.firebaseapp.com",
    databaseURL: "https://my-second-project-5acec.firebaseio.com",
    projectId: "my-second-project-5acec",
    storageBucket: "my-second-project-5acec.appspot.com",
    messagingSenderId: "304734652385"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export{
      storage,firebase as default
  }
