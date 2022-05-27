import React from 'react';
import ReactDOM from 'react-dom';
import App3 from './App3';
import './index.css';
//import App from './App';
//import App1 from './App1';
import {BrowserRouter} from 'react-router-dom'
import App4 from "./App4";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App3 />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

