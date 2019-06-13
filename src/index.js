import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configStore from './store/store.js';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
const store = configStore();

ReactDOM.render( <I18nextProvider i18n={i18n}><Provider store={store}><App /></Provider></I18nextProvider>, document.getElementById('root'));

//ReactDOM.render( <I18nextProvider i18n={i18n}><App /></I18nextProvider>, document.getElementById('root'));
//ReactDOM.render( <App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
