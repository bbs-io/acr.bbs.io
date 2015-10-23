var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var AppCachePlugin = require('appcache-webpack-plugin');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

//pass target to babel
process.env.BABEL_ENV = TARGET;

var common = {
  entry: {
    //vendor: ['lodash','React','bluebird'],
    app: APP_PATH
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: function(info){
      var p = info.absoluteResourcePath.replace(/\\/g,'/').replace(__dirname.replace(/\\/g,'/'),'webpack:///r3k-example');
      //console.log(p);
      return p;
    }
  },
  
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      'underscore': 'lodash' //replace underscore requires inside modules with lodash
    }
  },
  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel']
      },
      
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style'
          ,'css?sourceMap'
          ,'autoprefixer?{remove:false,browsers:["last 3 version", "> 1%", "ie >= 9"]}'
          ,'sass?sourceMap'
        ),
        include: APP_PATH
      }
    ]
  },
  
  plugins: [
    
    //outputs index.html
    new HtmlwebpackPlugin({
      title: 'Test App'
    }),
    
    new ExtractTextPlugin('app.css'),
    
    //new webpack.optimize.OccurenceOrderPlugin(true),
    
    //new webpack.optimize.CommonsChunkPlugin(
    //    /* chunkName= */ "vendor",
    //    /* filename= */  "vendor.js"
    //),
    
    //new AppCachePlugin()
  ]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port:3100
    },
    plugins: [
      //global variable declarations
      new webpack.DefinePlugin({
        'DEBUG': true,
        'PRODUCTION': false
      }),
      
      new webpack.HotModuleReplacementPlugin()
    ]
  });
} else {
  //production bundling
  var basePath = __dirname.replace(/\\/g,'/')
  
  module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'DEBUG': false,
        'PRODUCTION': true
      }),
      
      //minimize JS
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      
      new webpack.optimize.DedupePlugin(),
    ]
  })
}
