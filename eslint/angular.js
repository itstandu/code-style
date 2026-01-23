const ts = require('./typescript')

module.exports = {
  ...ts,
  plugins: {
    ...ts.plugins,
    '@angular-eslint': require('@angular-eslint/eslint-plugin'),
    '@angular-eslint/template': require('@angular-eslint/eslint-plugin-template'),
  },
  rules: {
    ...ts.rules,
    '@angular-eslint/directive-selector': [
      'warn',
      {
        type: 'attribute',
        prefix: 'app',
        style: 'camelCase',
      },
    ],
    '@angular-eslint/component-selector': [
      'warn',
      {
        type: 'element',
        prefix: 'app',
        style: 'kebab-case',
      },
    ],
    '@angular-eslint/no-empty-lifecycle-method': 'warn',
    '@angular-eslint/no-host-metadata-property': 'warn',
    '@angular-eslint/no-input-rename': 'warn',
    '@angular-eslint/no-output-on-prefix': 'warn',
    '@angular-eslint/no-output-rename': 'warn',
    '@angular-eslint/use-lifecycle-interface': 'warn',
    '@angular-eslint/use-pipe-transform-interface': 'warn',
  },
}
