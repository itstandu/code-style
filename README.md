# @itstandu/code-style

[![npm version](https://img.shields.io/npm/v/@itstandu/code-style)](https://www.npmjs.com/package/@itstandu/code-style)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Production-ready shared ESLint + Prettier configuration library for JavaScript and TypeScript projects.

## Features

- **ESLint v9** (Flat Config)
- **Prettier v3** with Tailwind CSS support
- Supports **JavaScript** and **TypeScript**
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

**Note:** You do NOT need to install `eslint`, `prettier`, or any plugins separately. This package includes all dependencies.

## Usage

### ESLint

Create `eslint.config.js` (or `eslint.config.mjs`) in your project root:

#### Base Preset (Minimal)

```javascript
const codeStyle = require('@itstandu/code-style')

module.exports = [codeStyle.base, codeStyle.typescript, codeStyle.node]
```

#### Recommended Preset (Better Safety)

```javascript
const codeStyle = require('@itstandu/code-style')

module.exports = [codeStyle.recommended, codeStyle.typescript, codeStyle.node]
```

#### Strict Preset (Opt-in, includes boundaries)

```javascript
const codeStyle = require('@itstandu/code-style')

module.exports = [codeStyle.strict, codeStyle.typescript, codeStyle.node]
```

### Framework Presets

#### React

```javascript
const codeStyle = require('@itstandu/code-style')

module.exports = [codeStyle.recommended, codeStyle.typescript, codeStyle.react]
```

#### Next.js

```javascript
const codeStyle = require('@itstandu/code-style')

module.exports = [codeStyle.recommended, codeStyle.typescript, codeStyle.next]
```

#### Vue

```javascript
const codeStyle = require('@itstandu/code-style')

module.exports = [codeStyle.recommended, codeStyle.vue]
```

#### Angular

```javascript
const codeStyle = require('@itstandu/code-style')

module.exports = [codeStyle.recommended, codeStyle.typescript, codeStyle.angular]
```

#### NestJS

```javascript
const codeStyle = require('@itstandu/code-style')

module.exports = [codeStyle.recommended, codeStyle.typescript, codeStyle.nest]
```

### Prettier

Create `.prettierrc.js` (or `.prettierrc.cjs`) in your project root:

```javascript
module.exports = require('@itstandu/code-style/prettier')
```

Or add to `package.json`:

```json
{
  "prettier": "@itstandu/code-style/prettier"
}
```

**Optional:** Copy `.prettierignore` from this package to your project root to ignore common files:

```bash
cp node_modules/@itstandu/code-style/.prettierignore .prettierignore
```

### Setup Scripts

Add these scripts to your `package.json` for convenient formatting and linting:

```json
{
  "scripts": {
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
    "format:check": "prettier --check \"**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

**Usage:**

- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check formatting without modifying files (useful for CI)
- `npm run lint` - Check code for linting errors
- `npm run lint:fix` - Auto-fix linting issues (including import sorting)

**Recommended workflow:**

Run both format and lint:fix to ensure consistent code style:

```bash
npm run format && npm run lint:fix
```

Or create a combined script:

```json
{
  "scripts": {
    "style": "npm run format && npm run lint:fix"
  }
}
```

### Ensuring Consistent Formatting

This package ensures **100% Prettier coverage** for all formatting:

- ✅ All ESLint formatting rules are disabled via `eslint-config-prettier`
- ✅ React/JSX formatting rules are disabled (Prettier handles JSX)
- ✅ Vue template formatting rules are disabled (Prettier handles Vue)
- ✅ Comprehensive Prettier options cover all formatting scenarios
- ✅ Tailwind CSS class sorting is automatic (via `prettier-plugin-tailwindcss`)

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

**Important:** Make sure your editor/IDE:

- Uses Prettier as default formatter with `formatOnSave`
- Runs ESLint auto-fix on save (`source.fixAll.eslint`) for import sorting

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
