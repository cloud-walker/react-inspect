import React from 'react'

const Component = ({children, type}) => (
  <span
    style={{
      fontWeight: 'bold',
      color: (() => {
        switch (type) {
          case 'string':
            return 'green'
          case 'number':
            return 'orange'
          case 'function':
            return 'magenta'
          default:
            return 'purple'
        }
      })(),
    }}
  >
    {children}
  </span>
)

Component.displayName = 'ReactInspectValue'

export default Component
