import window from 'global/window';
import { WINDOW_CHANGED, getWindowState } from '../../actions/window';

var defaultState = getWindowState();

export default function windowReducer(state = defaultState, action) {
  //not running in a browser
  if (!window == window.self && window.document) return state;
  
  //match against existing actions
  switch(action && action.type) {
    
    case WINDOW_CHANGED:
      return action.window;
      
  } //end switch
  
  //nothing to do, return existing state
  return state;
  
} // end windowReducer