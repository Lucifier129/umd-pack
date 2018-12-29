const { createTransformer } = require('babel-jest')

module.exports = createTransformer({
  presets: ['react-app']
})
