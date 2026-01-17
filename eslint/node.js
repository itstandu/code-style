const ts = require('./typescript')

module.exports = {
  ...ts,
  plugins: {
    ...ts.plugins,
    promise: require('eslint-plugin-promise'),
    n: require('eslint-plugin-n')
  },
  rules: {
    ...ts.rules,
    'n/no-process-exit': 'off',
    'n/no-missing-import': 'off',
    'promise/always-return': 'off',
    'promise/no-nesting': 'off',
    'promise/no-callback-in-promise': 'warn'
  }
}
