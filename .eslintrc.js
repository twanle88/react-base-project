module.exports = {
  env: {
    browser: true,
    es6: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'import/no-named-as-default': 0,
    'mouse-events-have-key-events': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 0,
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'type', 'object', 'sibling', 'index'],
    }],
    'react/button-has-type': 'off',
    'no-multi-spaces': 'error',
    'keyword-spacing': ['error', {
      before: true,
    }],
    'react/no-unescaped-entities': ['off', {
      forbid: ['>', '}', '"', '\''],
    }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    camelcase: [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: true,
        ignoreImports: true,
      },
    ],
    'react/destructuring-assignment': ['off', 'always'],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    'no-unused-vars': ['error', {
      args: 'after-used',
    }],
    'no-console': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-nested-ternary': 0,
    'consistent-return': 0,
    'no-alert': 'error',
    'react/jsx-no-constructed-context-values': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'max-len': 0,
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text', '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      },
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'eol-last': 0,
    'import/no-extraneous-dependencies': 0,
  },
};