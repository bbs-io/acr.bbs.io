import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { App, DevTools, WindowEvents } from './containers';
import {default as createStore} from './store';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require('./index.css');

const rootElement = document.getElementById('root')
const store = createStore(); //TODO: lookup from sessionstate/localstate/server, etc

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
      <WindowEvents />
    </div>
  </Provider>,
  rootElement
);
