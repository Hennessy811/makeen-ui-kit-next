module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-base', 'plugin:unicorn/recommended', 'plugin:prettier/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'unicorn/prevent-abbreviations': 'off',
    'react/prop-types': 'off',
    'unicorn/filename-case': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'off',
  },
};
