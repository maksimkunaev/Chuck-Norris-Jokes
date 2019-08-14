import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store'
import createSagaMiddleware from 'redux-saga'

import saga from './store/saga'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
