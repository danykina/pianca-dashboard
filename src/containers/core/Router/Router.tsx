import React, { FunctionComponent } from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

const Home = loadable(() => import('../../Home/Home'));

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
