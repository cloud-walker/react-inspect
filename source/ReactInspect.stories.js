import React from 'react'
import {storiesOf} from '@storybook/react'

import Component from './react-inspect'

storiesOf(Component.displayName, module).add('default', () =>
  <Component data={{foo: 'bar', baz: 'doo'}} />,
)
