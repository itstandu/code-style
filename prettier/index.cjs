module.exports = {
  // Basic formatting
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  // Bracket and spacing
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',

  // JSX/HTML specific
  jsxSingleQuote: false,
  singleAttributePerLine: false,

  // Quotes
  quoteProps: 'as-needed',

  // Line endings and whitespace
  endOfLine: 'lf',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',

  // Vue specific
  vueIndentScriptAndStyle: false,

  // Pragma (for legacy systems)
  insertPragma: false,
  requirePragma: false,

  // Embedded language formatting
  embeddedLanguageFormatting: 'auto',

  // Plugins - order matters: oxc first for parsing, tailwindcss last for class sorting
  plugins: ['@prettier/plugin-oxc', 'prettier-plugin-tailwindcss'],
}
