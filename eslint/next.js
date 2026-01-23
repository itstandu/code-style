const react = require("./react");

module.exports = {
  ...react,
  ignores: [...react.ignores, "**/.next/**", "**/out/**", "**/.vercel/**"],
  settings: {
    ...react.settings,
    // Next.js uses React 18+ which doesn't need React import
    react: {
      version: "detect",
    },
  },
  rules: {
    ...react.rules,

    // Next.js specific - allow img for optimization bypass cases
    "@next/next/no-img-element": "off",

    // Allow anchor without href for Link component children
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],

    // Next.js handles these automatically
    "react/react-in-jsx-scope": "off",
  },
};
