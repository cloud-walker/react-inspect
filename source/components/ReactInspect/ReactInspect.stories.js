import React from 'react'
import {storiesOf} from '@storybook/react'

import data from '../../mocks/data'
import Component from './index'

storiesOf(Component.displayName, module)
  .add('default', () => <Component data={data} />)
  .add('gloom theme', () => <Component data={data} theme="gloom" />)
