import React from 'react'
import is from 'ramda/src/is'
import pipe from 'ramda/src/pipe'
import addIndex from 'ramda/src/addIndex'
import map from 'ramda/src/map'
import keys from 'ramda/src/keys'

import stripFunction from '../../../utils/stripFunction'
import Level from '../../Level'
import Punctuation from '../../Punctuation'
import Key from '../../Key'
import Value from '../../Value'

const Component = ({
  LevelComponent = Level,
  PunctuationComponent = Punctuation,
  ValueComponent = Value,
  KeyComponent = Key,
  data,
}) => {
  if (is(String)(data)) {
    return <ValueComponent type="string">{`"${data}"`}</ValueComponent>
  }

  if (is(Function)(data)) {
    return (
      <ValueComponent type="function">
        {stripFunction(String(data))}
      </ValueComponent>
    )
  }

  if (is(Array)(data)) {
    return (
      <span>
        <PunctuationComponent>{'['}</PunctuationComponent>
        {addIndex(map)((x, i) => (
          <LevelComponent key={i}>
            <Component
              KeyComponent={KeyComponent}
              LevelComponent={LevelComponent}
              PunctuationComponent={PunctuationComponent}
              ValueComponent={ValueComponent}
              data={x}
            />
          </LevelComponent>
        ))(data)}
        <PunctuationComponent>{']'}</PunctuationComponent>
      </span>
    )
  }

  if (is(Object)(data)) {
    return (
      <span>
        <PunctuationComponent>{'{'}</PunctuationComponent>
        {pipe(
          keys,
          map(x => (
            <LevelComponent key={x}>
              <KeyComponent>{x}</KeyComponent>
              <PunctuationComponent>:</PunctuationComponent>{' '}
              <Component
                KeyComponent={KeyComponent}
                LevelComponent={LevelComponent}
                PunctuationComponent={PunctuationComponent}
                ValueComponent={ValueComponent}
                data={data[x]}
              />
            </LevelComponent>
          )),
        )(data)}
        <PunctuationComponent>{'}'}</PunctuationComponent>
      </span>
    )
  }

  return <ValueComponent type="keyword">{`${data}`}</ValueComponent>
}

Component.displayName = 'ReactInspectDataHandler'

export default Component
