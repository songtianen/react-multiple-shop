/* eslint-disable no-nested-ternary */
// import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './redux/reducer';

// import rootSaga from './saga/index';
// const sagaMiddleware = createSagaMiddleware();
let middleware = [ReduxThunk];
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

// sagaMiddleware.run(rootSaga);
export default store;
