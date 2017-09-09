import React from 'react'
import {is, pipe, map, keys, addIndex} from 'ramda'

import stripFunction from '../../utils/stripFunction'
import Layout from '../Layout'
import Func from '../Func'
import Key from '../Key'
import Level from '../Level'
import Num from '../Num'
import Punctuation from '../Punctuation'
import Str from '../Str'
import Keyword from '../Keyword'

const createComponent = (
  {
    inner = false,
    LayoutComponent = Layout,
    FunctionComponent = Func,
    KeyComponent = Key,
    LevelComponent = Level,
    NumberComponent = Num,
    PunctuationComponent = Punctuation,
    StringComponent = Str,
    KeywordComponent = Keyword,
  } = {},
) => ({data}) => {
  if (!inner) {
    if (is(Array)(data)) {
      return (
        <LayoutComponent>
          <PunctuationComponent>
            {'['}
          </PunctuationComponent>
          {addIndex(map)((x, i) =>
            <LevelComponent key={i}>
              {createComponent({
                inner: true,
                LayoutComponent,
                FunctionComponent,
                KeyComponent,
                LevelComponent,
                NumberComponent,
                PunctuationComponent,
                StringComponent,
                KeywordComponent,
              })({data: x})}
            </LevelComponent>,
          )(data)}
          <PunctuationComponent>
            {']'}
          </PunctuationComponent>
        </LayoutComponent>
      )
    }

    if (is(Function)(data)) {
      return (
        <LayoutComponent>
          <FunctionComponent>
            {stripFunction(String(data))}
          </FunctionComponent>
        </LayoutComponent>
      )
    }

    if (is(Object)(data)) {
      return (
        <LayoutComponent>
          <PunctuationComponent>
            {'{'}
          </PunctuationComponent>
          {pipe(
            keys,
            map(x =>
              <LevelComponent key={x}>
                <KeywordComponent>{x}</KeywordComponent>
                <PunctuationComponent>:</PunctuationComponent>{' '}
                {createComponent({
                  inner: true,
                  LayoutComponent,
                  FunctionComponent,
                  KeyComponent,
                  LevelComponent,
                  NumberComponent,
                  PunctuationComponent,
                  StringComponent,
                  KeywordComponent,
                })({data: data[x]})}
              </LevelComponent>,
            ),
          )(data)}
          <PunctuationComponent>
            {'}'}
          </PunctuationComponent>
        </LayoutComponent>
      )
    }

    if (is(String)(data)) {
      return (
        <LayoutComponent>
          <StringComponent>
            "{data}"
          </StringComponent>
        </LayoutComponent>
      )
    }

    if (is(Number)(data)) {
      return (
        <LayoutComponent>
          <NumberComponent>
            {data}
          </NumberComponent>
        </LayoutComponent>
      )
    }

    return (
      <LayoutComponent>
        <KeywordComponent>{`${data}`}</KeywordComponent>
      </LayoutComponent>
    )
  }

  if (is(Array)(data)) {
    return (
      <span>
        <PunctuationComponent>
          {'['}
        </PunctuationComponent>
        {addIndex(map)((x, i) =>
          <LevelComponent key={i}>
            {createComponent({
              inner: true,
              LayoutComponent,
              FunctionComponent,
              KeyComponent,
              LevelComponent,
              NumberComponent,
              PunctuationComponent,
              StringComponent,
              KeywordComponent,
            })({data: x})}
          </LevelComponent>,
        )(data)}
        <PunctuationComponent>
          {']'}
        </PunctuationComponent>
      </span>
    )
  }

  if (is(Function)(data)) {
    return (
      <FunctionComponent>
        {stripFunction(String(data))}
      </FunctionComponent>
    )
  }

  if (is(Object)(data)) {
    return (
      <span>
        <PunctuationComponent>
          {'{'}
        </PunctuationComponent>
        {pipe(
          keys,
          map(x =>
            <LevelComponent key={x}>
              <KeywordComponent>{x}</KeywordComponent>
              <PunctuationComponent>:</PunctuationComponent>{' '}
              {createComponent({
                inner: true,
                LayoutComponent,
                FunctionComponent,
                KeyComponent,
                LevelComponent,
                NumberComponent,
                PunctuationComponent,
                StringComponent,
                KeywordComponent,
              })({data: data[x]})}
            </LevelComponent>,
          ),
        )(data)}
        <PunctuationComponent>
          {'}'}
        </PunctuationComponent>
      </span>
    )
  }

  if (is(String)(data)) {
    return (
      <StringComponent>
        "{data}"
      </StringComponent>
    )
  }

  if (is(Number)(data)) {
    return (
      <NumberComponent>
        {data}
      </NumberComponent>
    )
  }

  return <KeywordComponent>{`${data}`}</KeywordComponent>
}

const Component = createComponent()

Component.displayName = 'ReactInspect'

export const createReactInspect = createComponent
export default Component
