import window from 'global/window';
import ss from 'json-stable-stringify';

export const WINDOW_CHANGED = 'WINDOW_CHANGED';

const defaultState = {
  size: {
    width: window.innerWidth || 360,
    height: window.innerHeight || 480
  },
  position: {
    left:0,
    top:0
  }
}

var currentStateString = ss(getWindowState());

export function changed(dispatch) {
  var newState = getWindowState();
  var newStateString = ss(newState);
  if (currentStateString == newStateString) return;
  currentStateString = newStateString;
  dispatch({
    type: WINDOW_CHANGED,
    window: newState
  });
}

export function getWindowState() {
  if (!window == window.self && window.document) return defaultState;
  
  const doc = window.document.documentElement;
  
  return {
    size: {
      width: window.innerWidth,
      height: window.innerHeight
    }
    ,position: {
      left: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
      top: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    }
  };
  
}