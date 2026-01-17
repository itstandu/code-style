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
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'unused-imports/no-unused-imports': 'error',

    'import/first': 'error',
    'import/newline-after-import': 'error'
  }
}
