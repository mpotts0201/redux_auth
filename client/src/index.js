import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/App.container';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()



ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();