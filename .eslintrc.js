module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  env: {node: true},
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {'react/prop-types': 'off'},
}
