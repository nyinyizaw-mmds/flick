
const files = (state = [], action) => {
    switch (action.type) {      
      case 'FETCH_FILE':
        console.log('actiondata',action.data)
        return [...action.data];
      case 'ADD_FILE':
        return [
          ...state,
          action.file
        ]
      case 'DELETE_ARTICLE':
      return [...state.filter(item => item.id !== action.id)]
      // case 'UPDATE_ARTICLE' :
      //   return [
      //     ...state.filter(item => item.id !== action.article.id),
      //     action.article
      //   ]
      default:
        return state
    }
  }

  export default files