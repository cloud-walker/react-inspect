import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

import pkg from './package.json'

const babelConfig = babel({exclude: 'node_modules/**'})
const external = ['react']
const input = 'source/index.js'

const iifeConfig = {
  input,
  output: {
    file: 'dist/react-inspect.js',
    format: 'iife',
  },
  name: 'ReactInspect',
  globals: {
    react: 'React',
  },
  external,
  plugins: [nodeResolve(), commonjs(), babelConfig],
}

export default [
  iifeConfig,
  Object.assign({}, iifeConfig, {
    output: {
      file: 'dist/react-inspect.min.js',
      format: 'iife',
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
