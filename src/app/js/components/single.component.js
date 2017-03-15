import React, {PropTypes} from 'react'
import axios from 'axios'
import PokeImg from './single/pokeimg.component'

export default class SingleGenComponent extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {
          chosenGen: this.props.chosenGen,
          generationNumber: null,
          totalPokemon: [1,2,3,4,5,6,7,8,9,10],
          region: null
        }
    }

    render() {
      console.log(this.state);
      let pokeImg = this.state.totalPokemon
      pokeImg = pokeImg.map((poke, index)=>{
        return (
          <PokeImg key={index.toString()} id={poke}/>
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
