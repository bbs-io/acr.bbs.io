import { createStore, combineReducers } from 'redux';
import * as windowState from './window';

console.log(windowState);

//create store
const store = createStore(combineReducers({
  window: windowState.reducers
}));

//register windowstate events
windowState.register(store);

//export the store
export {store as default};