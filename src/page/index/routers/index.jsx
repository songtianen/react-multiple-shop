import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '../Main/Container';

const Routers = () => (
  <Router>
    <Switch>
      <Route exact path='/app' component={Container} />
    </Switch>
  </Router>
);

export default Routers;
