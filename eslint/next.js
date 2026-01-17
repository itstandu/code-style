const react = require('./react')

module.exports = {
  ...react,
  ignores: [
    ...react.ignores,
    '**/.next/**',
    '**/out/**'
  ]
}
