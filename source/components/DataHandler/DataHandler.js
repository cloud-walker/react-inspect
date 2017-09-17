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
import CollapseHandler from '../CollapseHandler'

const Component = class extends React.Component {
  static displayName = 'ReactInspectDataHandler'
  static defaultProps = {
    outer: false,
  }

  render() {
    const {data, outer} = this.props

    if (is(String)(data)) {
      return <Value type="string">{`"${data}"`}</Value>
    }

    if (is(Function)(data)) {
      const value = <Value type="function">{stripFunction(String(data))}</Value>

      if (outer) {
        return value
      }

      return (
        <CollapseHandler>
          {show =>
            show ? value : {...value, props: {...value.props, children: 'fn'}}}
        </CollapseHandler>
      )
    }

    if (is(Array)(data)) {
      const value = addIndex(map)((x, i) => (
        <Level key={i}>
          <Component data={x} />
        </Level>
      ))(data)

      return (
        <span>
          <Punctuation>{'['}</Punctuation>
          {outer ? (
            value
          ) : (
            <CollapseHandler>{show => (show ? value : '...')}</CollapseHandler>
          )}
          <Punctuation>{']'}</Punctuation>
        </span>
      )
    }

    if (is(Object)(data)) {
      const value = pipe(
        keys,
        map(x => (
          <Level key={x}>
            <Key>{x}</Key>
            <Punctuation>:</Punctuation> <Component data={data[x]} />
          </Level>
        )),
      )(data)

      return (
        <span>
          <Punctuation>{'{'}</Punctuation>
          {outer ? (
            value
          ) : (
            <CollapseHandler>{show => (show ? value : '...')}</CollapseHandler>
          )}
          <Punctuation>{'}'}</Punctuation>
        </span>
      )
    }

    return <Value type="keyword">{`${data}`}</Value>
  }
}

export default Component
