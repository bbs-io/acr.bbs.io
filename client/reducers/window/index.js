import window from 'global/window';
import { handleActions } from 'redux-actions';
import getWindowState from '../../utils/window-state';

export default handleActions({
  WINDOW_CHANGED: (state, action) => action.payload
}, getWindowState() /* default state */);
