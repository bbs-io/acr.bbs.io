import window from 'global/window';

export const defaultState = {
  size: {
    width: window.innerWidth || 360,
    height: window.innerHeight || 480
  },
  position: {
    left:0,
    top:0
  }
}

export default function getWindowState() {
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