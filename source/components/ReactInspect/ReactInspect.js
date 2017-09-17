import React from 'react'
import allPass from 'ramda/src/allPass'
import complement from 'ramda/src/complement'
import is from 'ramda/src/is'
import isCircular from 'just-is-circular'

import DataHandler from '../DataHandler'
import Layout from '../Layout'

const Component = ({data}) => {
  if (allPass([complement(is(Function)), is(Object), isCircular])(data)) {
    throw new Error(
      'ReactInspect Error: circular data inspection not supported',
    )
  }

  return (
    <Layout>
      <DataHandler data={data} outer />
    </Layout>
  )
}

Component.displayName = 'ReactInspect'

export default Component
