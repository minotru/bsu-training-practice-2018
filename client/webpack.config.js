const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './src/index',

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public/`,
  },
  // mode: 'development',
};

