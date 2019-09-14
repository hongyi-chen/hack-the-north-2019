import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<home />, document.getElementById('root'));
ReactDOM.render(<login />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
