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
          region: null,
          pokemon: []
        }
    }
    
    componentDidMount(){
    axios.get("http://pokeapi.co/api/v2/pokemon/650/").then((res)=>{
      console.log(res.data);
      this.setState({
        pokemon: res.data
      })
    })
  }

    render() {
      console.log(this.props.route)
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
