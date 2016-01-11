import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import windowEventMiddleware from './window';
import promiseMiddleware from 'redux-promise';

const finalCreateStore = compose(
  applyMiddleware(
    promiseMiddleware,
    windowEventMiddleware
  ),
  // Other store enhancers if you use any
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};