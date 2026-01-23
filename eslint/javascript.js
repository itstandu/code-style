const base = require('./base')

module.exports = {
  ...base,
  languageOptions: {
    ...base.languageOptions,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  rules: {
    ...base.rules,

    // Enable JS-specific unused vars (TypeScript config has its own)
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
