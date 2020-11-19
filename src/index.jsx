import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AuthService from "./services/firebase/authService";

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);
