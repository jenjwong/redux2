import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(rootReducer)}>
    <App />
  </Provider>
  ,document.getElementById('root')
);
