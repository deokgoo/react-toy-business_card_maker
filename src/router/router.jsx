import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/main/main';
import Login from '../pages/login/login';

const Router = ({ authService }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/login">
          <Login authService={authService}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;