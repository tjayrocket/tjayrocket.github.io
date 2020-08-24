const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
  },
};