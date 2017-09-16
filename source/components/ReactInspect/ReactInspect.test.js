import React from 'react'
import {shallow} from 'enzyme'

import Component from './index'
import data, {circ} from '../../mocks/data'

const subject = shallow(<Component data={data} />)

/* eslint-env jest */
describe(`${Component.displayName} component`, () => {
  it('should render properly', () => {
    expect(subject).toMatchSnapshot()
  })

  it('should throw an error if the data is circular', () => {
    expect(() => subject.setProps({data: circ})).toThrowError()
  })
})
