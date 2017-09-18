import 'sanitize.css'
import {configure} from '@storybook/react'

import './main.css'

const req = require.context('../source', true, /\.stories\.js$/)

const loadStories = () => req.keys().forEach(req)

configure(loadStories, module)
