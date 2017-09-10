import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json'

export default [
  {
    input: 'source/index.js',
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'},
    ],
    external: ['react'],
    plugins: [
      nodeResolve({main: true, jsnext: true}),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/ramda/index.js': Object.keys(
            require('ramda'),
          ),
        },
      }),
      babel({exclude: 'node_modules/**'}),
    ],
  },
]
