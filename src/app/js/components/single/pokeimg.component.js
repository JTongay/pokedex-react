import React, { PropTypes } from 'react'

const PokeImgComponent = React.createClass({
  render () {
    return (
      <img src={`https://veekun.com/dex/media/pokemon/global-link/${this.props.id}.png`} />
    )
  }
})

export default PokeImgComponent
