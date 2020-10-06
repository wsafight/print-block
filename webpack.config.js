const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /\.ts$/,
      use: "ts-loader"
    }, {
      test: /\.styl$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  }
};