const base = require('./base')

module.exports = {
  ...base,
  languageOptions: {
    ...base.languageOptions,
    parser: require('@typescript-eslint/parser'),
    parserOptions: {
      project: true
    }
  },
  plugins: {
    ...base.plugins,
    '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
  },
  rules: {
    ...base.rules,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
