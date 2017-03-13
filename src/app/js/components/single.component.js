import React, { PropTypes } from 'react'
import axios from 'axios'

const SingleGenComponent = React.createClass({
  getInitialState(){
    console.log(this.props);
    return {
      chosenGen: this.props.chosenGen,
      generationNumber: null,
      totalPokemon: [],
      region: null,
    }
  },

  componentWillMount(){
    console.log(this.state.chosenGen);
    // for(var i = this.state.chosenGen.genStart; i <= this.state.chosenGen.genEnd; i++){
    //   axios.get("http://pokeapi.co/api/v2/pokemon/" + i).then((res)=>{
    //     console.log(res.data);
    //     this.state.totalPokemon.push(res.data)
    //   })
    // }
  },

  render () {
    console.log(this.state.chosenGen);
    console.log(this.state.totalPokemon);
    // let generation = this.state.totalPokemon;
    // generation = generation.map((poke, index)=>{
    //   return (
    //     <li>{poke.name}</li>
    //   )
    // })
    return (
    <div>
      <h1>Gen {this.props.genNum}</h1>
    </div>
    )
  }
})

export default SingleGenComponent
