/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import Routers from './routers';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}

export default hot(App);
