# @itstandu/code-style

[![npm version](https://img.shields.io/npm/v/@itstandu/code-style)](https://www.npmjs.com/package/@itstandu/code-style)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Production-ready shared ESLint + Prettier configuration library for JavaScript and TypeScript projects.

## Features

- **ESLint v9** (Flat Config)
- **Prettier v3** with Tailwind CSS support
- Supports **JavaScript** and **TypeScript**
- **Full file type support** - Formats all common file types: JS/JSX, TS/TSX, JSON, CSS/SCSS/LESS, HTML, Markdown, YAML, GraphQL, and more
- **Dual package exports** - Supports both CommonJS (`require`) and ES modules (`import`)
- Framework presets: **React**, **Next.js**, **Vue**, **Angular**, **NestJS**
- **Node.js** backend support
- Stable import sorting with `eslint-plugin-simple-import-sort`
- Auto-fix friendly rules
- **Complete Prettier coverage** - All formatting handled by Prettier, no conflicts with ESLint
- No style rules in ESLint (Prettier handles all formatting)
- Architecture rules via `eslint-plugin-boundaries` (opt-in only)

## Installation

Choose your package manager:

### npm

```bash
npm install -D @itstandu/code-style
```

### pnpm

```bash
pnpm add -D @itstandu/code-style
```

### yarn

```bash
yarn add -D @itstandu/code-style
```

### bun

```bash
bun add -d @itstandu/code-style
```

**Note:** 
- ESLint plugins are bundled and don't need separate installation.
- Prettier plugins are included but **Prettier requires plugins to be installed in your project's `node_modules`** (not in dependencies of this package). 

**For pnpm users:** You need to install Prettier plugins in your project:

```bash
pnpm add -D prettier @prettier/plugin-oxc @prettier/plugin-xml prettier-plugin-tailwindcss
```

**For npm/yarn users:** Plugins should work automatically, but if you encounter issues, install them explicitly:

```bash
# npm
npm install -D prettier @prettier/plugin-oxc @prettier/plugin-xml prettier-plugin-tailwindcss

# yarn
yarn add -D prettier @prettier/plugin-oxc @prettier/plugin-xml prettier-plugin-tailwindcss
```

The config automatically detects and only loads plugins that are available, so it won't crash if some are missing.

## Quick Start

After installation, you only need to configure **2 files** to get started:

### 1. ESLint Config

Create `eslint.config.js` (CommonJS) or `eslint.config.mjs` (ES modules) in your project root:

**CommonJS (`eslint.config.js`):**

For TypeScript projects:
```javascript
const codeStyle = require('@itstandu/code-style')

module.exports = [codeStyle.recommended, codeStyle.typescript, codeStyle.node]
```

For React/Next.js:
```javascript
const codeStyle = require('@itstandu/code-style')

module.exports = [codeStyle.recommended, codeStyle.typescript, codeStyle.react]
// or codeStyle.next for Next.js
```

**ES Modules (`eslint.config.mjs`):**

For TypeScript projects:
```javascript
import * as codeStyle from '@itstandu/code-style'

export default [codeStyle.recommended, codeStyle.typescript, codeStyle.node]
```

For React/Next.js:
```javascript
import * as codeStyle from '@itstandu/code-style'

export default [codeStyle.recommended, codeStyle.typescript, codeStyle.react]
// or codeStyle.next for Next.js
```

### 2. Prettier Config

**CommonJS (`.prettierrc.js` or `.prettierrc.cjs`):**
```javascript
module.exports = require('@itstandu/code-style/prettier')
```

**ES Modules (`.prettierrc.mjs`):**
```javascript
import prettierConfig from '@itstandu/code-style/prettier'

export default prettierConfig
```

**Or add to `package.json`:**
```json
{
  "prettier": "@itstandu/code-style/prettier"
}
```

**That's it!** You're ready to use ESLint and Prettier. Run `npx eslint .` and `npx prettier --write .` to test.

## Usage

### CommonJS vs ES Modules

This package supports both CommonJS and ES modules:

- **CommonJS**: Use `require()` and `module.exports` (works with `.js` files)
- **ES Modules**: Use `import` and `export` (works with `.mjs` files or `"type": "module"`)

The package automatically resolves to the correct format based on your import style.

### Available Presets

#### Base Preset (Minimal)

**CommonJS:**
```javascript
const codeStyle = require('@itstandu/code-style')
module.exports = [codeStyle.base, codeStyle.typescript, codeStyle.node]
```

**ES Modules:**
```javascript
import * as codeStyle from '@itstandu/code-style'
export default [codeStyle.base, codeStyle.typescript, codeStyle.node]
```

#### Recommended Preset (Default, Better Safety)

**CommonJS:**
```javascript
const codeStyle = require('@itstandu/code-style')
module.exports = [codeStyle.recommended, codeStyle.typescript, codeStyle.node]
```

**ES Modules:**
```javascript
import * as codeStyle from '@itstandu/code-style'
export default [codeStyle.recommended, codeStyle.typescript, codeStyle.node]
```

#### Strict Preset (Opt-in, includes boundaries)

**CommonJS:**
```javascript
const codeStyle = require('@itstandu/code-style')
module.exports = [codeStyle.strict, codeStyle.typescript, codeStyle.node]
```

**ES Modules:**
```javascript
import * as codeStyle from '@itstandu/code-style'
export default [codeStyle.strict, codeStyle.typescript, codeStyle.node]
```

### Framework Presets

- **React**: `codeStyle.react`
- **Next.js**: `codeStyle.next`
- **Vue**: `codeStyle.vue`
- **Angular**: `codeStyle.angular`
- **NestJS**: `codeStyle.nest`

See [Available Configs](#available-configs) section for full list.

## Optional Setup

### Package Scripts (Optional)

Add these scripts to your `package.json` for convenient formatting and linting:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

**Note:** Prettier automatically formats all supported file types (JS/JSX, TS/TSX, JSON, CSS/SCSS/LESS, HTML, Markdown, YAML, GraphQL, Vue, SVG, etc.). Files listed in `.prettierignore` will be excluded.

### .prettierignore (Optional)

Copy `.prettierignore` from this package to exclude common files:

```bash
cp node_modules/@itstandu/code-style/.prettierignore .prettierignore
```

## Advanced

### Supported File Types

Prettier automatically formats all common file types:

**Built-in support:**
- JavaScript/TypeScript: `.js`, `.jsx`, `.ts`, `.tsx`, `.mjs`, `.cjs`
- JSON: `.json`, `.jsonc`
- CSS: `.css`, `.scss`, `.sass`, `.less`
- HTML: `.html`, `.htm`
- Markdown: `.md`, `.mdx`
- YAML: `.yaml`, `.yml`
- GraphQL: `.graphql`, `.gql`

**Plugin support (included):**
- XML/SVG: `.xml`, `.svg` (via `@prettier/plugin-xml`)
- Vue: `.vue` (built-in Prettier support)

### Import Sorting Philosophy

**Critical Principle:**

> **Sort import → ESLint. Prettier TUYỆT ĐỐI không làm việc này.**

**Why ESLint, not Prettier?**

- **ESLint understands semantics**: side-effect imports, type vs value imports, module boundaries, aliases
- **Prettier only formats syntax**: whitespace, commas, line breaks — it doesn't understand import logic
- **Deterministic vs Context-aware**: Prettier aims for same input → same output. Import sorting needs context and grouping rules

**This package configuration:**

- ✅ **ESLint**: `simple-import-sort` handles all import sorting
- ✅ **Prettier**: Only formats code (whitespace, quotes, etc.) — **NO import sorting**
- ✅ **Exception**: Tailwind class sorting (string order, no logic impact)

**Result:** Clean separation of concerns, no conflicts, battle-tested approach.

### Ensuring Consistent Formatting

This package ensures **100% Prettier coverage** for all formatting:

- ✅ All ESLint formatting rules are disabled via `eslint-config-prettier`
- ✅ React/JSX formatting rules are disabled (Prettier handles JSX)
- ✅ Vue template formatting rules are disabled (Prettier handles Vue)
- ✅ Comprehensive Prettier options cover all formatting scenarios
- ✅ Tailwind CSS class sorting is automatic (via `prettier-plugin-tailwindcss`)

### Editor Configuration (Optional)

For the best experience, configure your editor to format on save:

#### VS Code / Cursor

Add to your workspace `.vscode/settings.json` or user settings:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[graphql]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

**What this does:**

- ✅ **Prettier** formats code on save (whitespace, quotes, etc.)
- ✅ **ESLint auto-fix** runs on save, which will:
  - Remove unused imports (`unused-imports/no-unused-imports`)
  - Sort imports (`simple-import-sort/imports`)
  - Fix other auto-fixable ESLint issues

**Required extensions:**

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Presets

### `base`

Minimal, safe defaults. Good starting point.

### `recommended`

Enhanced safety rules while remaining practical. Recommended for most projects.

### `strict`

Opt-in preset with additional rules including:

- `eslint-plugin-unicorn` (code quality)
- `eslint-plugin-sonarjs` (bug detection)
- `eslint-plugin-boundaries` (architecture enforcement, disabled by default)

## Available Configs

- `base` - Base ESLint configuration
- `javascript` - JavaScript support
- `typescript` - TypeScript support
- `node` - Node.js backend rules
- `react` - React framework rules
- `next` - Next.js framework rules
- `vue` - Vue framework rules
- `angular` - Angular framework rules
- `nest` - NestJS framework rules
- `recommended` - Recommended preset
- `strict` - Strict preset (opt-in)

## Principles

- **Practical and stable** - Designed for long-term use (5-10 years)
- **Not over-opinionated** - Focuses on bugs, correctness, and maintainability
- **Auto-fix friendly** - Most rules are auto-fixable
- **No style rules in ESLint** - Prettier handles all formatting
- **Stable import sorting** - Uses `eslint-plugin-simple-import-sort` for predictable sorting
- **Architecture rules optional** - Boundaries enforcement is opt-in only

## Requirements

- Node.js >= 18.0.0
- TypeScript >= 5.0.0 (peer dependency, optional for JS-only projects)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

---

Made with ❤️ by [@itstandu](https://github.com/itstandu)
