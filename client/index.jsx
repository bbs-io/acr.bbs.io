import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require('./index.css');

render(<App />, document.getElementById('root'));
