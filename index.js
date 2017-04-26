import React from 'react';
import ReactDOM from 'react-dom';
import promiseMiddleware from 'redux-promise';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>
  ,document.getElementById('root')
);