import window from 'global/window';
import { WINDOW_RESIZE } from './actions'

const defaultState = {
  size: {
    width: window.innerWidth || 360,
    height: window.innerHeight || 480
  }
}

export default function windowReducer(state = defaultState, action) {
   
  //match against existing actions
  switch(action && action.type) {
    
    case WINDOW_RESIZE:
      return {
        ...state, 
        size:action.size
      };
      
  } //end switch
  
  //nothing to do, return existing state
  return state;
  
} // end windowReducer