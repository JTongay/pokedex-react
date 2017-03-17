import React, { PropTypes } from 'react'

export default class PokeImgComponent extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    let pokeNumber = parseInt(this.props.id)
    console.log(pokeNumber);
    this.setState({
      allPokemon: this.props.showGenPokemon(this.props.id)
    })
  }

  render () {
    console.log(this.state.allPokemon);
    return (
      <img src={`https://veekun.com/dex/media/pokemon/global-link/${this.props.id}.png`} />
    )
  }
}
