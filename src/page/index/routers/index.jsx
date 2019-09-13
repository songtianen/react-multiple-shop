import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Order from '../Home/Order/Order';
import My from '../my/my';
import BottomBar from '../BottomBar/BottomBar';
import Test from './test';

const Routers = () => (
  <Router>
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/order' component={Order} />
      <Route path='/mine' component={My} />
    </Switch>
    <Test />
    <BottomBar />
  </Router>
);

export default Routers;
