const path = require('path');

console.log(__dirname);

const config = {
  context: __dirname,
  entry: './react-app/index.jsx',
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: 'password-app.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  },
  mode: 'development',
  node: {
    global: false
  }
};

module.exports = config;