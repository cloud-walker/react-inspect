import React from 'react'
import {storiesOf} from '@storybook/react'

import data from './dataMock'
import Component from './index'

storiesOf(Component.displayName, module).add('default', () =>
  <Component data={data} />,
)
