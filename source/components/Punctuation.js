import React from 'react'

const Component = ({children, theme}) => (
  <span
    style={{
      fontWeight: 'bold',
      color: (() => {
        switch (theme) {
          case 'gloom':
            return '#F1EFF7'
          default:
            return 'inherit'
        }
      })(),
    }}
  >
    {children}
  </span>
)

Component.displayName = 'ReactInspectPunctuation'

export default Component
