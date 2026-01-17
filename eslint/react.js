const ts = require('./typescript')

module.exports = {
  ...ts,
  languageOptions: {
    ...ts.languageOptions,
    parserOptions: {
      ...ts.languageOptions.parserOptions,
      ecmaFeatures: {
        jsx: true
      }
    },
    globals: {
      ...ts.languageOptions.globals,
      React: 'readonly',
      JSX: 'readonly'
    }
  },
  plugins: {
    ...ts.plugins,
    react: require('eslint-plugin-react'),
    'react-hooks': require('eslint-plugin-react-hooks'),
    'jsx-a11y': require('eslint-plugin-jsx-a11y')
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    ...ts.rules,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'error',
    'react/self-closing-comp': 'off',

    'react/jsx-boolean-value': 'off',
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-first-prop-newline': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-quotes': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/html-has-lang': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/interactive-supports-focus': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',
    'jsx-a11y/tabindex-no-positive': 'warn'
  }
}
