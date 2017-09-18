import React from 'react'

const Component = ({children, theme}) => (
  <pre
    style={{
      lineHeight: 1.25,
      fontSize: '1.25rem',
      fontFamily: 'monospace',
      padding: '0.75rem',
      display: 'inline-block',
      backgroundColor: (() => {
        switch (theme) {
          case 'gloom':
            return '#212136'
          default:
            return 'transparent'
        }
      })(),
    }}
  >
    {children}
  </pre>
)

Component.displayName = 'ReactInspectLayout'

export default Component
