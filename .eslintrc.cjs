module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 15,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': [1],
    'react/react-in-jsx-scope': [0],
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': ['error', { extensions: ['ts', 'tsx'] }],
    'no-console': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
