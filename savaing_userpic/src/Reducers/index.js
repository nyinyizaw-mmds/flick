import {combineReducers} from 'redux';
import currentUser from './currentUser';
import files from  './files';

export default combineReducers({currentUser,files});