console.log(process.env.NODE_ENV, process.env.BABEL_ENV);
require("babel-register");
require("babel-polyfill");

// Use ProvidePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./server.prod');
} else {
  module.exports = require('./server.dev');
}