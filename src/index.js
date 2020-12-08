// import './tailwind.output.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import { fetchMeals } from "./actions"
import reducer from "./reducers"

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

store.dispatch(fetchMeals()).then(() => console.log(store.getState()))

// const store = createStore(reducer)
// console.log(store.getState())
// let unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch({type: "FILTER"})
// console.log(store.getState())
// store.dispatch({type: "ADD_MEAL"})
// console.log(store.getState())

// unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
