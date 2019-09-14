import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import login from './login.js';
import home from './home.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<home />, document.getElementById('root'));
ReactDOM.render(<login />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
