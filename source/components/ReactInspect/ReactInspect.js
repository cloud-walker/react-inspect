import React from 'react'
import {allPass, complement, is} from 'ramda'
import isCircular from 'just-is-circular'

import DataHandler from './DataHandler'
import Layout from '../Layout'
import Level from '../Level'
import Key from '../Key'
import Punctuation from '../Punctuation'
import Value from '../Value'

const Component = ({
  LayoutComponent = Layout,
  LevelComponent = Level,
  PunctuationComponent = Punctuation,
  ValueComponent = Value,
  KeyComponent = Key,
  data,
}) => {
  if (allPass([complement(is(Function)), is(Object), isCircular])(data)) {
    throw new Error(
      'ReactInspect Error: circular data inspection not supported',
    )
  }

  return (
    <LayoutComponent>
      <DataHandler
        KeyComponent={KeyComponent}
        ValueComponent={ValueComponent}
        PunctuationComponent={PunctuationComponent}
        LevelComponent={LevelComponent}
        data={data}
      />
    </LayoutComponent>
  )
}

Component.displayName = 'ReactInspect'

export default Component
