const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist', 'demo'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      // 'react-laboratory': path.resolve(__dirname, '../dist/index'),
      ReactLaboratory: '../dist/index',
    },
  },
  devtool: 'source-map',
};
