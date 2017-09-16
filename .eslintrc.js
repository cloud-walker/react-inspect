module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  env: {
    node: true,
    //   browser: true,
    //   es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
}
