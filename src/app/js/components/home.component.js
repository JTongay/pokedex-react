import React, { PropTypes } from 'react'
import axios from 'axios'

require('../../scss/home.scss')

const HomeComponent = React.createClass({

  getInitialState(){
    return {
      pokemon: [],
      gens: [1,2,3,4,5,6]
    }
  },

  componentWillMount(){
    axios.get("http://pokeapi.co/api/v2/pokemon/650/").then((res)=>{
      console.log(res.data);
    })
  },

  //helper functions


  render () {
    //Repeat image to total number of generations
    let numOfGens = this.state.gens;
    numOfGens = numOfGens.map((gen, index)=>{
      return (
        <li key={gen.toString()}><img src="http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" /></li>
      )
    })

    return (
      <div>
        <h1>Welcome to the React Pokedex! This was all made in React</h1>
        <ul>
          {numOfGens}
        </ul>
      </div>
    )
  }
})

export default HomeComponent
