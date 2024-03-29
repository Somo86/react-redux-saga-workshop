import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from "react-redux";
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import reducers from './redux/mainReducer';
import initialState from './redux/initialState';
import mainSaga from './redux/mainSaga';

//saga
const sagaMiddleware = createSagaMiddleware();

// Redux store
const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mainSaga);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
