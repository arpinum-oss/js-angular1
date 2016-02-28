'use strict';

let path = require('path');
let webpack = require('webpack');

let config = {};

config.entry = {
  index: './lib/index.js'
};

config.output = {
  path: path.join(__dirname, 'dist'),
  filename: '[name].js',
  library: '@arpinum/angular1',
  libraryTarget: 'umd'
};

config.externals = {
  angular: 'angular',
  bluebird: 'bluebird',
  lodash: 'lodash',
  moment: 'moment'
};

config.module = {
  loaders: [{
    test: /\.js$/,
    loaders: ['ng-annotate', 'babel'],
    exclude: [/node_modules/]
  }]
};

config.plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = config;
