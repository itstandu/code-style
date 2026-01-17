const recommended = require('./recommended')

module.exports = {
  ...recommended,
  plugins: {
    ...recommended.plugins,
    boundaries: require('eslint-plugin-boundaries'),
    unicorn: require('eslint-plugin-unicorn'),
    sonarjs: require('eslint-plugin-sonarjs')
  },
  rules: {
    ...recommended.rules,

    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'warn',
    'unicorn/no-array-callback-reference': 'warn',
    'unicorn/prefer-array-find': 'warn',
    'unicorn/prefer-array-some': 'warn',
    'unicorn/prefer-array-index-of': 'warn',
    'unicorn/prefer-string-starts-ends-with': 'warn',
    'unicorn/prefer-string-slice': 'warn',
    'unicorn/no-useless-undefined': 'warn',
    'unicorn/prefer-optional-catch-binding': 'warn',

    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-small-switch': 'off',
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/prefer-single-boolean-return': 'warn',

    'boundaries/element-types': 'off',
    'boundaries/no-private': 'off',
    'boundaries/entry-point': 'off'
  }
}
