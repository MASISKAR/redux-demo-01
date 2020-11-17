import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const defaultState = {
  count: 0,
  value: 'text',
  isAdmin: true
};

const mainReducer = (state = defaultState, action)=>{
console.log('state', state);
console.log('action', action);


return state;
};


const store = createStore(mainReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
 
       <App />

    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


