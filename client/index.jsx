import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import {default as createStore} from './store';
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require('./index.css');

const rootElement = document.getElementById('root');

//TODO: lookup from sessionstate/localstate/server, etc
const store = createStore();

const history = createHistory();
syncReduxAndRouter(history, store);

render(
  <App history={history} store={store} production={true} />,
  rootElement
);
