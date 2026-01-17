const ts = require('./typescript')

module.exports = {
  ...ts,
  rules: {
    ...ts.rules
  }
}
