import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'

import data from './dataMock'
import Component, {createReactInspect} from './index'
import Func from '../Func'

const FunctionComponent = styled(Func)`
  color: lightblue;
`

storiesOf(Component.displayName, module)
  .add('default', () => <Component data={data} />)
  .add('custom presentation', () => {
    const CustomComponent = createReactInspect({FunctionComponent})

    return <CustomComponent data={data} />
  })
