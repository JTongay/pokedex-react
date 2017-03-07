import React, { PropTypes } from 'react'
import axios from 'axios'

const HomeComponent = React.createClass({

  getInitialState(){
    return {
      pokemon: []
    }
  },

  componentWillMount(){
    axios.get('http://pokeapi.co/api/v2/pokemon/4').then((res)=>{
      console.log(res.data);
      this.setState({
        pokemon: res.data
      })
    })
  },

  render () {
    return (
      <div>
        <h1>Welcome to the React Pokedex! This was all made in React</h1>
        <img src="http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" />
        <p>{this.state.pokemon.name}</p>
      </div>
    )
  }
})

export default HomeComponent
