const node = require("./node");

module.exports = {
  ...node,
  rules: {
    ...node.rules,

    // NestJS uses decorators and DI heavily
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-require-imports": "off",

    // NestJS uses empty constructors for DI
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "off",

    // NestJS uses parameter properties
    "@typescript-eslint/parameter-properties": "off",

    // Allow any for DTOs and decorators
    "@typescript-eslint/no-explicit-any": "off",
  },
};
