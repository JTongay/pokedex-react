import React, {PropTypes} from 'react'
import axios from 'axios'
import PokeImg from './single/pokeimg.component'

export default class SingleGenComponent extends React.Component {
    constructor(props) {
      super(props);
      // this.showGenPokemon = this.showGenPokemon.bind(this)
      this.state = {
          chosenGen: this.props.chosenGen,
          generationNumber: null,
          totalPokemon: [1,2,3,4,5,6,7,8,9,10],
          region: null
        }
    }

    // showGenPokemon(gen){
    //   let parsedGen = parseInt(gen)
    //   let allPokemonInGen = this.state.gens[parsedGen]
    //   return allPokemonInGen
    // }

    render() {
      let pokeImg = this.state.totalPokemon
      pokeImg = pokeImg.map((poke, index)=>{
        return (
          <PokeImg key={index} id={poke} />
        )
      })
      return (
          <div>
            <h1>Booyah</h1>
            {pokeImg}
          </div>
        )
    }
}
