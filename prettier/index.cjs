module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  bracketSpacing: true,
  bracketSameLine: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  requirePragma: false,
  vueIndentScriptAndStyle: false,

  plugins: ['@prettier/plugin-oxc', 'prettier-plugin-tailwindcss']
}
