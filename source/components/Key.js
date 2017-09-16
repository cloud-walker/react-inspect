import React from 'react'

const Component = ({children}) => (
  <span style={{fontWeight: 'bold', color: '#777'}}>{children}</span>
)

Component.displayName = 'ReactInspectKey'

export default Component
