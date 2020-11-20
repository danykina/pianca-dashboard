import React, { FunctionComponent } from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

import NavigationLayout from '../../../components/layouts/SidebarLayout/NavigationLayout';

import SidebarMenu from '../../../components/menus/SidebarMenu/SidebarMenu';

const Dashboard = loadable(() => import('../../Dashboard/Dashboard'));
const Webcams = loadable(() => import('../../Webcams/Webcams'));

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <NavigationLayout navigationMenu={<SidebarMenu />}>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/webcams">
            <Webcams />
          </Route>

          <Redirect to="/home" />
        </Switch>
      </NavigationLayout>
    </BrowserRouter>
  );
};

export default Router;
