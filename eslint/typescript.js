const base = require('./base');

// Try to load TypeScript resolver, but don't fail if not available
let typescriptResolver = null;
try {
  require.resolve('eslint-import-resolver-typescript');
  typescriptResolver = {
    typescript: {
      alwaysTryTypes: true,
    },
  };
} catch (e) {
  // Resolver not available, skip
}

const settings = {
  ...base.settings,
  'import/resolver': {
    ...base.settings['import/resolver'],
    ...typescriptResolver,
  },
};

module.exports = {
  ...base,
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    ...base.languageOptions,
    parser: require('@typescript-eslint/parser'),
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: true,
      tsconfigRootDir: process.cwd(),
    },
  },
  plugins: {
    ...base.plugins,
    '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
  },
  settings,
  rules: {
    ...base.rules,

    // Disable base rules that TypeScript handles
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-return-await': 'off',

    // TypeScript unused vars - use plugin for auto-fix
    '@typescript-eslint/no-unused-vars': 'off',

    // Promise handling - critical for async code
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],

    // Type imports - cleaner bundles
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],

    // Type safety - balanced for real-world use
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'off',

    // Modern TypeScript features
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-as-const': 'warn',

    // Safety
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 10,
      },
    ],

    // Strict: Prevent common mistakes
    '@typescript-eslint/no-array-delete': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-useless-empty-export': 'warn',

    // Import hygiene (only enable if TypeScript resolver is available)
    'import/no-cycle': typescriptResolver ? 'warn' : 'off',
  },
};
