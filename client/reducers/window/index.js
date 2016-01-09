import window from 'global/window';
import { WINDOW_CHANGED } from '../../actions/window';
import ss from 'json-stable-stringify';

const defaultState = {
  size: {
    width: window.innerWidth || 360,
    height: window.innerHeight || 480
  }
  /*,
  position: {
    left:0,
    top:0
  }*/
}

export default function windowReducer(state = defaultState, action) {
  //not running in a browser
  if (!window == window.self && window.document) return state;
  
  const doc = window.document.documentElement;
  
  //match against existing actions
  switch(action && action.type) {
    
    case WINDOW_CHANGED:
      var newState == {
        size: {
          width: window.innerWidth,
          height: window.innerHeight
        }
        /*,position: {
          top: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
          left: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
        }*/
      };
      //only return new state if it's different
      if (ss(newState) !== ss(state)) return newState;
      
  } //end switch
  
  //nothing to do, return existing state
  return state;
  
} // end windowReducer