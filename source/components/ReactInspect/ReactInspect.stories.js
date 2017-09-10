import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'

import data from './dataMock'
import Component, {createReactInspect} from './index'
import Value from '../Value'

const ValueComponent = styled(Value)`
  font-weight: normal;
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

storiesOf(Component.displayName, module)
  .add('default', () => <Component data={data} />)
  .add('custom presentation', () => {
    const CustomComponent = createReactInspect({ValueComponent})

    return <CustomComponent data={data} />
  })
