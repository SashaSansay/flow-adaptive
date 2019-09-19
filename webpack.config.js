const path = require('path')
const config = require('./webpack.config.module.js')

module.exports = Object.assign({}, config, {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'flow-adaptive.min.js',
    libraryTarget: 'window',
  },
})
