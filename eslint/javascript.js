const base = require('./base')

module.exports = {
  ...base,
  files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
  languageOptions: {
    ...base.languageOptions,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  rules: {
    ...base.rules,

    // JS inherits strict unused-vars from base
    // STRICT: No underscore bypass - use `void variable` for intentionally unused
    'no-unused-vars': 'off',
  },
}
