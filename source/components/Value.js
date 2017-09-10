import styled from 'styled-components'

export default styled.span`
  font-weight: bold;
  color: ${props => {
    switch (props.type) {
      case 'string':
        return 'green'
      case 'number':
        return 'orange'
      case 'function':
        return 'magenta'
      default:
        return 'purple'
    }
  }};
`
