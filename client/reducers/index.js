import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router'
import window from './window';

export default combineReducers({
  window,
  routing: routeReducer
});
