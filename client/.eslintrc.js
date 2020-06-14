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
    'react/jsx-one-expression-per-line': 'off'
  },
};
