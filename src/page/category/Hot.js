/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import Container from './Main/Container';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default hot(App);
