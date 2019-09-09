import React from 'react'
import propTypes from 'prop-types'

export default class DefaultErrorBoundary extends React.Component {
  static propTypes = {
    children: propTypes.node.isRequired
  }
  state = {
    isError: false
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    const { isError } = this.state
    return isError ? <div>Somethings wrong</div> : this.props.children
  }
}
