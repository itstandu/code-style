const base = require('./base')

module.exports = {
  ...base,
  rules: {
    ...base.rules,

    // Console and debugging
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-alert': 'warn',

    // Security
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',

    // Modern JavaScript
    'prefer-arrow-callback': 'warn',
    'prefer-template': 'warn',
    'prefer-spread': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-destructuring': [
      'warn',
      {
        array: false,
        object: true,
      },
    ],
    'object-shorthand': ['warn', 'always'],

    // Code cleanliness
    'no-useless-return': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': 'warn',
    'no-lonely-if': 'warn',
    'no-unneeded-ternary': 'warn',

    // Import hygiene
    'import/no-unresolved': 'off',
    'import/no-cycle': 'warn',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-mutable-exports': 'error',
  },
}
