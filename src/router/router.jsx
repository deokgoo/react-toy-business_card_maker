import React from 'react';
import Maker from '../pages/maker/maker';
import Login from '../pages/login/login';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = ({ authService }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Login authService={authService}/>} />
        <Route path="/maker" component={Maker}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;