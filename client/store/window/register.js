import window from 'global/window';
import _ from 'lodash';
import { resize } from './actions';

export default function registerStore(store) {
  console.log('window.registerStore', store);
  
  //avoid flooding on resize events, only run every 1/20 second
  window.addEventListener('resize', _.debounce(()=>{
    var action = resize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    console.log('resize', action);
    
    store.dispatch(action);
  },50), true);
}