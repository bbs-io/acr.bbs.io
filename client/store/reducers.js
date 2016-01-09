import { combineReducers } from 'redux';
import * as windowStore from './window';

export default combineReducers({
  window: windowStore.reducers
});
