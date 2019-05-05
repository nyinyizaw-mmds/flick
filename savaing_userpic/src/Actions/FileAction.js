import firebase from '../Utilities/firebase'
const firestore = firebase.firestore();

export const fetchArticles = () => dispatch =>{
    firestore.collection('message').onSnapshot(snapshot => {
        const messages = [];
        snapshot.docs.forEach(item => {
          const message = item.data();
          message.id = item.id;
          messages.push(message);
        })

        dispatch({
                    type: 'FETCH_FILE',
                    data : messages
                   
                  });
      })
}


// export const fetchFiles = () => dispatch => {  
//     //const articles = retrieveData('articles');
//     const files = [];
//     const filesData = firestore.collection('files').get();
//     filesData.then( (snapshot) => {
       
//       snapshot.docs.forEach( item => {
//         const file = item.data();
//         file.id = item.id;
//         files.push(file);
       
         
//       });
     
//       dispatch({
//         type: 'FETCH_FILE',
//         data : files
       
//       });

     

//     })
    
//   };

// export const insertFile = (file,cb) => dispatch => {
//   console.log('file',file)
//    // file.user = firestore.collection('users').doc(file.author.id);
//     //file.user = firestore.collection('users').doc(file.author.id);
//    /// firestore.collection('files').add(file)
//    firestore.collection('files').add(file)
//     .then((data) =>{
//         file.id=data.id;
//         dispatch({
//             type:'ADD_FILE',
//             file:file
//         });
//         console.log('files',file)
//         cb();
//     })
// }

// export const insertComment = (comment,article) => dispatch => {  
//   if( article.comments == undefined){
//     article.comments = [comment];
//   }
//   else{
//     article.comments.push(comment);
//   }
  
//   //article.user = firestore.doc('users/'+article.author.id);
//   firestore.collection('files').doc(article.id).update({
//     comments : article.comments
//   }).then( () =>  {       
//     dispatch({
//       type: 'UPDATE_ARTICLE',
//       article : article
//     });
//   });
  
  
// };


export const deleteArticle = (id,cb) => dispatch => {
  console.log('deletearti',id)

  firestore.collection('message').doc("id").delete().then(data => {
    dispatch({
      type : 'DELETE_ARTICLE',
      id : id
    });
  //cb();
  });
  

  
}

