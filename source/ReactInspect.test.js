import React from 'react'
import {shallow} from 'enzyme'

import Component from './index'
import data, {arr, nil, num, fun, und, str} from './dataMock'

const subject = shallow(<Component />)

describe(`${Component.displayName} component`, () => {
  it('should render properly if data is undefined', () => {
    expect(subject).toMatchSnapshot()
  })

  it('should render properly if data is null', () => {
    subject.setProps({data: nil})

    expect(subject).toMatchSnapshot()
  })

  it('should render properly if data is a number', () => {
    subject.setProps({data: num})

    expect(subject).toMatchSnapshot()
  })

  it('should render properly if data is a string', () => {
    subject.setProps({data: str})

    expect(subject).toMatchSnapshot()
  })

  it('should render properly if data is a function', () => {
    subject.setProps({data: fun})

    expect(subject).toMatchSnapshot()
  })

  it('should render properly if data is an object', () => {
    subject.setProps({data: data})

    expect(subject).toMatchSnapshot()
  })

  it('should render properly if data is an array', () => {
    subject.setProps({data: arr})

    expect(subject).toMatchSnapshot()
  })
})
