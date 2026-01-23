const ts = require('./typescript')

module.exports = {
  ...ts,
  languageOptions: {
    ...ts.languageOptions,
    globals: {
      ...ts.languageOptions.globals,
      // Node.js global variables
      __dirname: 'readonly',
      __filename: 'readonly',
      Buffer: 'readonly',
      process: 'readonly',
      console: 'readonly',
      module: 'readonly',
      require: 'readonly',
      exports: 'writable',
      global: 'readonly',
    },
  },
  plugins: {
    ...ts.plugins,
    promise: require('eslint-plugin-promise'),
    n: require('eslint-plugin-n'),
  },
  rules: {
    ...ts.rules,

    // Node.js specific
    'n/no-process-exit': 'off',
    'n/no-missing-import': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
    'n/no-unpublished-import': 'off',
    'n/no-extraneous-import': 'off',
    'n/prefer-global/buffer': ['warn', 'always'],
    'n/prefer-global/process': ['warn', 'always'],
    'n/prefer-promises/fs': 'warn',
    'n/prefer-promises/dns': 'warn',

    // Promise best practices
    'promise/always-return': 'off',
    'promise/no-nesting': 'off',
    'promise/no-callback-in-promise': 'warn',
    'promise/catch-or-return': 'off',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
  },
}
