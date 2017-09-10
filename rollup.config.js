import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import analyze from 'rollup-analyzer-plugin'

import pkg from './package.json'

const babelConfig = babel({exclude: 'node_modules/**'})
const external = ['react']
const input = 'source/index.js'

const umdConfig = {
  input,
  output: {
    file: 'dist/react-inspect.umd.js',
    format: 'umd',
  },
  name: 'ReactInspect',
  globals: {
    react: 'React',
  },
  external,
  plugins: [nodeResolve(), commonjs(), babelConfig, analyze({limit: 3})],
}

export default [
  umdConfig,
  Object.assign({}, umdConfig, {
    output: {
      file: 'dist/react-inspect.umd.min.js',
      format: 'umd',
    },
    plugins: [nodeResolve(), commonjs(), babelConfig, uglify()],
  }),
  {
    input,
    output: [{file: pkg.main, format: 'cjs'}, {file: pkg.module, format: 'es'}],
    external,
    plugins: [nodeResolve({main: true, jsnext: true}), commonjs(), babelConfig],
  },
]
