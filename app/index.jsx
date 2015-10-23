import './globals';
import './index.scss';

import React from 'react';
import {render} from 'react-dom';
import App from './components/app.jsx';

main();

function main() {
	
	const app = document.createElement('div');
	
	const props = {
		dtm: new Date().toISOString().substr(13,10)
	}
	
	document.body.appendChild(app);
	render(<App {...props} />, app);
	
}
