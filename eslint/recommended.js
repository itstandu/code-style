const base = require('./base')

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-alert': 'warn',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',

    'prefer-arrow-callback': 'warn',
    'prefer-template': 'warn',
    'prefer-spread': 'warn',
    'prefer-rest-params': 'warn',

    'no-useless-return': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',

    'import/no-unresolved': 'off',
    'import/no-cycle': 'warn',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error'
  }
}
