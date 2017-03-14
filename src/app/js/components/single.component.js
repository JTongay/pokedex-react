import React, {PropTypes} from 'react'
import axios from 'axios'
import PokeImg from './single/pokeimg.component'

const SingleGenComponent = React.createClass({
    getInitialState() {
        console.log(this.props);
        return {
          chosenGen: this.props.chosenGen,
          generationNumber: null,
          totalPokemon: [1,2,3,4,5,6,7,8,9,10],
          region: null
        }
    },

    render() {
      let pokeImg = this.state.totalPokemon
      pokeImg = pokeImg.map((poke, index)=>{
        return (
          <PokeImg key={index.toString()} id={poke}/>
        )
      })
      return (
          <div>
            <h1>Booyah</h1>
            <h2>Gen {this.props.chosenGen.id}</h2>
            {pokeImg}
          </div>
        )
    }
})

export default SingleGenComponent
