import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

// Helper function to try requiring a plugin, returns null if not found
function tryRequire(pluginName) {
  try {
    require.resolve(pluginName)
    return pluginName
  } catch (e) {
    return null
  }
}

// Build plugins array - only include plugins that are installed
const plugins = []
const oxcPlugin = tryRequire('@prettier/plugin-oxc')
const xmlPlugin = tryRequire('@prettier/plugin-xml')
const tailwindPlugin = tryRequire('prettier-plugin-tailwindcss')

if (oxcPlugin) plugins.push(oxcPlugin)
if (xmlPlugin) plugins.push(xmlPlugin)
if (tailwindPlugin) plugins.push(tailwindPlugin)

export default {
  // Basic formatting
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
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

  // XML/SVG specific options
  xmlQuoteAttributes: 'preserve',
  xmlSelfClosingSpace: true,
  xmlSortAttributesByKey: false,
  xmlWhitespaceSensitivity: 'strict',

  // Plugins - automatically detected, only loaded if installed
  // Order matters: oxc first for parsing, tailwindcss last for class sorting
  plugins,
}
