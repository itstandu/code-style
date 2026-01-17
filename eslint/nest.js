const node = require('./node')

module.exports = {
  ...node,
  rules: {
    ...node.rules,
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
