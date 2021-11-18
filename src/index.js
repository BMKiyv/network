import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {subscribe} from './data/data'

const renderApp = ()=> { ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)};

renderApp();

subscribe(renderApp)

