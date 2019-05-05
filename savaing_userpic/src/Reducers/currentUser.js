const currentUser = (state = null, action) => {
    switch(action.type){
        case 'LOGIN':
            return action.user;
        case 'LOGOUT':
        return action;
        // case 'DELETE_ARTICLE':
        // return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}


export default currentUser;