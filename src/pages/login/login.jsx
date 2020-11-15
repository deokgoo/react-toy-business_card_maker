import React from 'react';
import LoginModal from '../../components/login-modal/login-modal';

const Login = ({authService}) => {
  return (
    <LoginModal authService={authService}/>
  )
}

export default Login;
