import React, { PropTypes } from 'react'

export default class LayoutComponent extends React.Component{
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
