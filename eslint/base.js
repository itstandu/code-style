module.exports = {
  ignores: [
    'node_modules',
    'dist',
    'build',
    '.next',
    '.output'
  ],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: {
    'simple-import-sort': require('eslint-plugin-simple-import-sort'),
    'unused-imports': require('eslint-plugin-unused-imports'),
    import: require('eslint-plugin-import')
  },
  rules: {
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-duplicate-imports': 'error',
    'no-console': 'warn',

    'no-var': 'error',
    'prefer-const': 'error',
    'no-shadow': 'off',

    'no-fallthrough': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],

    'no-async-promise-executor': 'error',

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^node:'],
          ['^@?\\w'],
          ['^@/'],
          ['^\\.\\.'],
          ['^\\.']
        ]
      }
    ],
    'simple-import-sort/exports': 'error',

    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'off',

    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error'
  }
}
