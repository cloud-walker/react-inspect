import React from 'react'

const Component = ({children, theme}) => (
  <span
    style={{
      fontWeight: 'bold',
      color: (() => {
        switch (theme) {
          case 'gloom':
            return '#6DFEDF'
          default:
            return '#777'
        }
      })(),
    }}
  >
    {children}
  </span>
)

Component.displayName = 'ReactInspectKey'

export default Component
