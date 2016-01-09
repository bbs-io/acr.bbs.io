import { createStore } from 'redux';
import reducers from './reducers';
import register from './register';

//console.log(windowStore);

export function create(currentState={}) {
  //create store
  const store = createStore(reducers, currentState);
  register(store);
  return store;
}
