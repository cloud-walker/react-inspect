import React from 'react'

const Component = ({children, type, theme}) => (
  <span
    style={{
      fontWeight: 'bold',
      color: (() => {
        switch (theme) {
          case 'gloom': {
            switch (type) {
              case 'string':
                return '#6DFEDF'
              case 'number':
                return '#FFDB7D'
              case 'function':
                return '#ED4781'
              default:
                return '#AE81FF'
            }
          }
          default: {
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
          }
        }
      })(),
    }}
  >
    {children}
  </span>
)

Component.displayName = 'ReactInspectValue'

export default Component
