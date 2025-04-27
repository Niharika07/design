import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { BrowserRouter, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter basename='/design-with-nikki'>
     <Link to="/map"/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);