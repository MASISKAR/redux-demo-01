import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thinkMiddleware from 'redux-thunk';

const middlewares = applyMiddleware(loggerMiddleware, thinkMiddleware);

const defaultState = {
  count: 0,
  value: 'text',
  isAdmin: true,
  posts: []
};

const mainReducer = (state = defaultState, action) => {

  switch (action.type) {
    case "ADD_VALUE": {
      return {
        ...state,
        count: state.count + action.value
      };
    }

    case "SUB_VALUE": {
      return {
        ...state,
        count: state.count - action.value
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        count: state.count - 1
      };
    }

    case "INCREMENT": {
      return {
        ...state,
        count: state.count + 1
      };
    }

    case "GET_POSTS": {
      return {
        ...state,
        posts: action.data
      };
    }

    default: return state;
  }

 /*  if (action.type === "ADD_VALUE") {
    const stateCopy = { ...state };

    stateCopy.count = state.count + action.value;

    return stateCopy;
    // return {
    //   ...state,
    //   count: state.count + action.value
    // };
  }

  if (action.type === "SUB_VALUE") {
    return {
      ...state,
      count: state.count - action.value
    };
  }

  if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1
    };
  }

  
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1
    };
  }

  return state; */
};


const store = createStore(mainReducer, middlewares);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


