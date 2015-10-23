// apply global overrides stuff here
require('babel-runtime/core-js/promise').default = require('bluebird');
global.Promise = require('bluebird'); // extra override
