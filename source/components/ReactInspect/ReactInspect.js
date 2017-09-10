import React from 'react'
import {is, pipe, map, keys, addIndex, allPass, complement} from 'ramda'
import isCircular from 'just-is-circular'

import stripFunction from '../../utils/stripFunction'
import Layout from '../Layout'
import Level from '../Level'
import Key from '../Key'
import Punctuation from '../Punctuation'
import Value from '../Value'

const createComponent = (
  {
    inner = false,
    LayoutComponent = Layout,
    LevelComponent = Level,
    PunctuationComponent = Punctuation,
    ValueComponent = Value,
    KeyComponent = Key,
  } = {},
) => ({data}) => {
  if (allPass([complement(is(Function)), is(Object), isCircular])(data)) {
    throw new Error(
      'ReactInspect Error: circular data inspection not supported',
    )
  }

  if (!inner) {
    if (is(Array)(data)) {
      return (
        <LayoutComponent>
          <PunctuationComponent>{'['}</PunctuationComponent>
          {addIndex(map)((x, i) => (
            <LevelComponent key={i}>
              {createComponent({
                inner: true,
                LayoutComponent,
                KeyComponent,
                LevelComponent,
                PunctuationComponent,
                ValueComponent,
              })({data: x})}
            </LevelComponent>
          ))(data)}
          <PunctuationComponent>{']'}</PunctuationComponent>
        </LayoutComponent>
      )
    }

    if (is(Function)(data)) {
      return (
        <LayoutComponent>
          <ValueComponent type="function">
            {stripFunction(String(data))}
          </ValueComponent>
        </LayoutComponent>
      )
    }

    if (is(Object)(data)) {
      return (
        <LayoutComponent>
          <PunctuationComponent>{'{'}</PunctuationComponent>
          {pipe(
            keys,
            map(x => (
              <LevelComponent key={x}>
                <KeyComponent>{x}</KeyComponent>
                <PunctuationComponent>:</PunctuationComponent>{' '}
                {createComponent({
                  inner: true,
                  LayoutComponent,
                  KeyComponent,
                  LevelComponent,
                  PunctuationComponent,
                  ValueComponent,
                })({data: data[x]})}
              </LevelComponent>
            )),
          )(data)}
          <PunctuationComponent>{'}'}</PunctuationComponent>
        </LayoutComponent>
      )
    }

    if (is(String)(data)) {
      return (
        <LayoutComponent>
          <ValueComponent type="string">"{data}"</ValueComponent>
        </LayoutComponent>
      )
    }

    if (is(Number)(data)) {
      return (
        <LayoutComponent>
          <ValueComponent type="number">{data}</ValueComponent>
        </LayoutComponent>
      )
    }

    return (
      <LayoutComponent>
        <ValueComponent type="keyword">{`${data}`}</ValueComponent>
      </LayoutComponent>
    )
  }

  if (is(Array)(data)) {
    return (
      <span>
        <PunctuationComponent>{'['}</PunctuationComponent>
        {addIndex(map)((x, i) => (
          <LevelComponent key={i}>
            {createComponent({
              inner: true,
              LayoutComponent,
              KeyComponent,
              LevelComponent,
              PunctuationComponent,
              ValueComponent,
            })({data: x})}
          </LevelComponent>
        ))(data)}
        <PunctuationComponent>{']'}</PunctuationComponent>
      </span>
    )
  }

  if (is(Function)(data)) {
    return (
      <ValueComponent type="function">
        {stripFunction(String(data))}
      </ValueComponent>
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
              {createComponent({
                inner: true,
                LayoutComponent,
                KeyComponent,
                LevelComponent,
                PunctuationComponent,
                ValueComponent,
              })({data: data[x]})}
            </LevelComponent>
          )),
        )(data)}
        <PunctuationComponent>{'}'}</PunctuationComponent>
      </span>
    )
  }

  if (is(String)(data)) {
    return <ValueComponent type="string">"{data}"</ValueComponent>
  }

  if (is(Number)(data)) {
    return <ValueComponent type="number">{data}</ValueComponent>
  }

  return <ValueComponent type="keyword">{`${data}`}</ValueComponent>
}

const Component = createComponent()

Component.displayName = 'ReactInspect'

export const createReactInspect = createComponent
export default Component
