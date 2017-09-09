import React from 'react'
import {shallow} from 'enzyme'

import Component from './index'

const subject = shallow(<Component data={{foo: 'bar'}} />)

describe(`${Component.displayName} component`, () => {
  it('should render properly', () => {
    expect(subject).toMatchSnapshot()
  })
})
