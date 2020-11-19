import React from 'react';
import style from './router.module.css';
import Maker from '../pages/maker/maker';
import Login from '../pages/login/login';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = ({ authService, isLogin }) => {
  return (
    <BrowserRouter>
      <div className={`${isLogin ? style.login : style.default}`}>
        <Switch>
          <Route exact path="/" render={() => <Login authService={authService}/>} />
          <Route path="/maker" component={Maker}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router;