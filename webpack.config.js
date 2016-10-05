var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var config = {
  entry: './src/main.js',
  devtool: 'source-map',
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
      loader: 'ng-annotate!babel'
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

module.exports = config;
