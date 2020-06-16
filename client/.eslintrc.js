module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  env: {
    "browser": true,
    "node": true,
  },
  globals : {
    "document": false
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-shadow': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'react/jsx-curly-newline': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
