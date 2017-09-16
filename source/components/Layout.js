import React from 'react'

const Component = ({children}) => (
  <pre style={{lineHeight: 1.25, fontSize: '1.25rem', fontFamily: 'monospace'}}>
    {children}
  </pre>
)

Component.displayName = 'ReactInspectLayout'

export default Component
