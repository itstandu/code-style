import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

export const base = require(join(__dirname, 'eslint', 'base.js'))
export const javascript = require(join(__dirname, 'eslint', 'javascript.js'))
export const typescript = require(join(__dirname, 'eslint', 'typescript.js'))
export const node = require(join(__dirname, 'eslint', 'node.js'))
export const react = require(join(__dirname, 'eslint', 'react.js'))
export const next = require(join(__dirname, 'eslint', 'next.js'))
export const vue = require(join(__dirname, 'eslint', 'vue.js'))
export const angular = require(join(__dirname, 'eslint', 'angular.js'))
export const nest = require(join(__dirname, 'eslint', 'nest.js'))
export const recommended = require(join(__dirname, 'eslint', 'recommended.js'))
export const strict = require(join(__dirname, 'eslint', 'strict.js'))
