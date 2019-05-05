import firebase from '../Utilities/firebase'
const firestore = firebase.firestore();


export const registerUserEvent = (
    email,
    password,
    successEvent,
    errorEvent
  ) => dispatch => {
    firebase.auth()
      .createUserWithEmailAndPassword(
        email,
        password
      )
      .then(data => {
        console.log(data.user);
        dispatch({
          type: "LOGIN",
          user: data.user
        });
        successEvent();
      })
      .catch(error => {
        errorEvent(error);
      });
  }

  
export const loginUserEvent = (
  email,
  password,
  successEvent,
  errorEvent
) => dispatch => {
  firebase.auth()
    .signInWithEmailAndPassword(
      email,
      password
    )
    .then(data => {
      console.log(data.user);
      dispatch({
        type: "LOGIN",
        user: data.user
      });
      successEvent();
    })
    .catch(error => {
      errorEvent(error);
    });
}


export const signOutEvent = () => dispatch => {
  firebase.auth().signOut().then(() => {
    dispatch({
      type: 'LOGOUT',
    
    });
  })
}


// export const deleteArticle = (id,cb) => dispatch => {

//   firestore.collection('message').doc("id").delete().then(data => {
//     dispatch({
//       type : 'DELETE_ARTICLE',
//       id : id
//     });
  
//   });
// }