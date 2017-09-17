import React from 'react'

const Component = class extends React.Component {
  static displayName = 'ReactInspectCollapseHandler'

  state = {show: false}

  constructor() {
    super()
    this.handleClick = e => {
      e.stopPropagation()
      this.setState({show: !this.state.show})
    }
  }

  render() {
    return (
      <span onClick={this.handleClick} style={{cursor: 'pointer'}}>
        {this.props.children(this.state.show)}
      </span>
    )
  }
}

export default Component
