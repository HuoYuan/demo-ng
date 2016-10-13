var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var environment = process.env.NODE_ENV || 'development';
console.log("Current environment is " + environment);
var config = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'base.[hash].bundle.js',
    publicPath: '/',
  },
  module: {
    noParse: [],
    loaders: [{
      test: /\.less$/,
      loader: 'style!css!postcss!less'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'index.ejs',
      inject: false,
    }),
  ],
  postcss: [ autoprefixer({ browsers: ['last 2 versions', 'iOS 8', 'Android 4.2'] }) ],
  resolve: {
    alias: {},
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    externals: {
      'angular': 'angular'
    },
    extensions: ['', '.json', '.js']
  }
}

if (environment === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: false,
    })
  );
}

if (environment === 'development') {
  config.devtool = 'source-map';
}

module.exports = config;
