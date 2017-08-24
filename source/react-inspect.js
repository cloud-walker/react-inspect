import React from 'react'

const Component = ({data}) =>
  <pre>
    {JSON.stringify(data, null, 2)}
  </pre>

Component.displayName = 'ReactInspect'

export default Component
