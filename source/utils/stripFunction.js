import pipe from 'ramda/src/pipe'
import split from 'ramda/src/split'
import map from 'ramda/src/map'
import when from 'ramda/src/when'
import slice from 'ramda/src/slice'
import equals from 'ramda/src/equals'
import join from 'ramda/src/join'

export default pipe(
  split('\n'),
  map(when(pipe(slice(0, 2), equals(' ')), slice(2, Infinity))),
  join('\n'),
)
