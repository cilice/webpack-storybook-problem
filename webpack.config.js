const path = require('path');

const entries = ['button', 'colors'];

module.exports = entries.map((entry) => ({
  mode: 'production',
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  entry: `./packages/${entry}/src/index.js`,
  output: {
    path: path.resolve(`./packages/${entry}/dist/`),
    filename: 'index.js',
  },
}));
