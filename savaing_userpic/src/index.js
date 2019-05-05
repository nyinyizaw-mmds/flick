import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from './Reducers';
import thunk from 'redux-thunk';
import App from './App';


const rootElement = document.getElementById("root");
const store = createStore(rootReducer,applyMiddleware(thunk))  ;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

