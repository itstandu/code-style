const prettierConfig = require('eslint-config-prettier');

module.exports = {
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.next/**',
    '**/.output/**',
    '**/.turbo/**',
    '**/.cache/**',
    '**/coverage/**',
  ],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {},
  },
  plugins: {
    'simple-import-sort': require('eslint-plugin-simple-import-sort'),
    'unused-imports': require('eslint-plugin-unused-imports'),
    import: require('eslint-plugin-import'),
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    ...prettierConfig.rules,

    // Error prevention
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-duplicate-imports': 'error',
    'no-console': 'warn',

    // Best practices
    'no-var': 'error',
    'prefer-const': 'error',
    'no-shadow': 'off',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    curly: ['error', 'multi-line', 'consistent'],

    // Control flow
    'no-fallthrough': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],

    // Async
    'no-async-promise-executor': 'error',
    'no-return-await': 'warn',
    'require-await': 'off',

    // Import sorting
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^node:'],
          ['^@?\\w'],
          ['^@/'],
          ['^\\.\\.'],
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // Unused imports - must use plugin for auto-fix
    // STRICT: No underscore bypass - use `void variable` for intentionally unused
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
      },
    ],
    'no-unused-vars': 'off',

    // STRICT: Dangerous patterns prevention
    // Note: To enforce no eslint-disable comments, add @eslint-community/eslint-plugin-eslint-comments
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for...in loops iterate over the entire prototype chain. Use Object.keys() or for...of instead.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are rarely needed. Consider refactoring.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode.',
      },
    ],

    // Import plugin
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
