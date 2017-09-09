import React from 'react'

const createComponent = ({inner} = {}) => ({data}) => {
  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

const Component = createComponent()

Component.displayName = 'ReactInspect'

export default Component
