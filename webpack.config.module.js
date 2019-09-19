const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.module.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.module.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
}
