const prettierConfig = require("eslint-config-prettier");

module.exports = {
  ignores: [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.next/**",
    "**/.output/**",
    "**/.turbo/**",
    "**/.cache/**",
    "**/coverage/**",
  ],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {},
  },
  plugins: {
    "simple-import-sort": require("eslint-plugin-simple-import-sort"),
    "unused-imports": require("eslint-plugin-unused-imports"),
    import: require("eslint-plugin-import"),
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    ...prettierConfig.rules,

    // Error prevention
    "no-undef": "error",
    "no-unreachable": "error",
    "no-duplicate-imports": "error",
    "no-console": "warn",

    // Best practices
    "no-var": "error",
    "prefer-const": "error",
    "no-shadow": "off",
    eqeqeq: ["error", "always", { null: "ignore" }],
    curly: ["error", "multi-line", "consistent"],

    // Control flow
    "no-fallthrough": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],

    // Async
    "no-async-promise-executor": "error",
    "no-return-await": "warn",
    "require-await": "off",

    // Import sorting
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          ["^node:"],
          ["^@?\\w"],
          ["^@/"],
          ["^\\.\\."],
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "error",

    // Unused imports - must use plugin for auto-fix
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": "off",

    // Import plugin
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
