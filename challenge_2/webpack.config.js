const path = require('path');

const SRC_DIR = path.join(__dirname, 'client');
const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
};