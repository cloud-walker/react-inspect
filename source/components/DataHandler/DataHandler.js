import React from 'react'
import is from 'ramda/src/is'
import pipe from 'ramda/src/pipe'
import addIndex from 'ramda/src/addIndex'
import map from 'ramda/src/map'
import keys from 'ramda/src/keys'

import stripFunction from '../../utils/stripFunction'
import Level from '../Level'
import Punctuation from '../Punctuation'
import Key from '../Key'
import Value from '../Value'

const Component = ({data}) => {
  if (is(String)(data)) {
    return <Value type="string">{`"${data}"`}</Value>
  }

  if (is(Function)(data)) {
    return (
      <Value type="function">{stripFunction(String(data))}</Value>
    )
  }

  if (is(Array)(data)) {
    return (
      <span>
        <Punctuation>{'['}</Punctuation>
        {addIndex(map)((x, i) => (
          <Level key={i}>
            <Component data={x} />
          </Level>
        ))(data)}
        <Punctuation>{']'}</Punctuation>
      </span>
    )
  }

  if (is(Object)(data)) {
    return (
      <span>
        <Punctuation>{'{'}</Punctuation>
        {pipe(
          keys,
          map(x => (
            <Level key={x}>
              <Key>{x}</Key>
              <Punctuation>:</Punctuation>{' '}
              <Component data={data[x]} />
            </Level>
          )),
        )(data)}
        <Punctuation>{'}'}</Punctuation>
      </span>
    )
  }

  return <Value type="keyword">{`${data}`}</Value>
}

Component.displayName = 'ReactInspectDataHandler'

export default Component
