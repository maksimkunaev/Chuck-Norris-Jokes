import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store'
import createSagaMiddleware from 'redux-saga'

import saga from './store/saga'
const sagaMiddleware = createSagaMiddleware();
import localStorageMiddleWare from "./api/localStorage";

const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(localStorageMiddleWare)
    )
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
