const path = require('path');

console.log(__dirname);

const config = {
  context: __dirname,
  entry: './react-app/index.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: 'password-app.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    rules: [{ test: /\.jsx?$/, loader: 'babel-loader' }]
  },
  mode: 'development'
};

module.exports = config;
