import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCounterApp from './CounterApp';
import * as serviceWorker from './serviceWorker';
import './assets/main.css';

// Application entry point
ReactDOM.render(
  <React.StrictMode>
    <SimpleCounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
