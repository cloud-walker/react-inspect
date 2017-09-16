import React from 'react'
import {storiesOf} from '@storybook/react'

import data from './dataMock'
import Component from './index'

const ValueComponent = ({children, type}) => (
  <span
    style={{
      fontStyle: 'italic',
      color: (() => {
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
      })(),
    }}
  >
    {children}
  </span>
)

const CustomComponent = ({data}) => (
  <Component ValueComponent={ValueComponent} data={data} />
)

storiesOf(Component.displayName, module)
  .add('default', () => <Component data={data} />)
  .add('custom presentation', () => <CustomComponent data={data} />)
