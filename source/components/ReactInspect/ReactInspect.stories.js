import React from 'react'
import {storiesOf} from '@storybook/react'

import data from './dataMock'
import Component from './index'
import Value from '../Value'

const ValueComponent = Value.extend`
  font-style: italic;
  color: ${({type}) => {
    switch (type) {
      case 'string':
        return 'orange'
      case 'function':
        return 'lightblue'
      case 'number':
        return 'red'
      default:
        return 'green'
    }
  }};
`

const CustomComponent = ({data}) => (
  <Component ValueComponent={ValueComponent} data={data} />
)

storiesOf(Component.displayName, module)
  .add('default', () => <Component data={data} />)
  .add('custom presentation', () => <CustomComponent data={data} />)
