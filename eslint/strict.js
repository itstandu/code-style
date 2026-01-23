const recommended = require('./recommended')

module.exports = {
  ...recommended,
  plugins: {
    ...recommended.plugins,
    boundaries: require('eslint-plugin-boundaries'),
    unicorn: require('eslint-plugin-unicorn'),
    sonarjs: require('eslint-plugin-sonarjs'),
  },
  rules: {
    ...recommended.rules,

    // Unicorn - modern JavaScript best practices
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
    'unicorn/no-null': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/no-lonely-if': 'warn',
    'unicorn/prefer-number-properties': 'warn',
    'unicorn/prefer-date-now': 'warn',

    // SonarJS - bug detection
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-small-switch': 'off',
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/prefer-single-boolean-return': 'warn',
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-collapsible-if': 'warn',
    'sonarjs/no-redundant-jump': 'warn',

    // Boundaries - architecture enforcement (opt-in, disabled by default)
    'boundaries/element-types': 'off',
    'boundaries/no-private': 'off',
    'boundaries/entry-point': 'off',
  },
}
