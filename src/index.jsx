import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import Router from './router/router';
import AuthService from './services/firebase/authService';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <Router authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);
