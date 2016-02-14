var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  entry: {
    'app': [
      './client/index'
    ],
    'server-app': [
      './client/index-server'
    ]
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
    // uglified via npm task
    /*
    ,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
    */
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },

      {
        test: /\.(json)$/,
        loaders: ['json']
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
