import React, { PropTypes } from 'react'
import axios from 'axios'

const SingleGenComponent = React.createClass({
  getInitialState(){
    console.log(this.props);
    return {
      generationNumber: null,
      totalPokemon: [],
      region: null,

    }
  },

  componentWillMount(){
    // for(var i = 0; i < this.totalPokemon.length; i++){
    //   axios.get("http://pokeapi.co/api/v2/pokemon/" + i).then((res)=>{
    //     console.log(res.data);
    //     this.setState({
    //       totalPokemon.push(res.data.name)
    //     })
    //   })
    // }
  },

  render () {
    return (
    <div>
      <h1>Gen {this.props.params.id}</h1>
    </div>
    )
  }
})

export default SingleGenComponent
