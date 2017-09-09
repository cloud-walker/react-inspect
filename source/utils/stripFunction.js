import {pipe, split, map, when, slice, equals, join} from 'ramda'

export default pipe(
  split('\n'),
  map(when(pipe(slice(0, 2), equals(' ')), slice(2, Infinity))),
  join('\n'),
)
