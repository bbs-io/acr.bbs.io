var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client',
      './client/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'client')
      },

      {
        test:   /\.css$/,
        loader: "style-loader!css-loader?sourceMap!postcss-loader?sourceMap"
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};
