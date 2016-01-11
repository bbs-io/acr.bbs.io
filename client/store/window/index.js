import window from 'global/window';
import _ from 'lodash';
import ss from 'json-stable-stringify';
import { createAction } from 'redux-actions';
import getWindowState from '../../utils/window-state';

var lastPayloadJson = null;

const onChange = _.debounce(function onChange(dispatch){
  var payload = getWindowState();
  var payloadJson = ss(payload);
  if (payloadJson == lastPayloadJson) return; //do nothing
  lastPayloadJson = payloadJson;
  dispatch(windowChanged(payload));
}, 50);

export const windowChanged = createAction('WINDOW_CHANGED');

export default function windowEventMiddleware({dispatch}) {
  if (window == window.self && window.addEventListener) {
    window.addEventListener('resize', ()=>onChange(dispatch), true);
    window.addEventListener('scroll', ()=>onChange(dispatch), true);
  }
  return next => action => next(action);
}
