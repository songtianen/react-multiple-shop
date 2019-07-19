import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';

const Routers = () => (
  <Router>
    <Switch>
      <Route exact path='/app' component={Main} />
    </Switch>
  </Router>
);

export default Routers;
