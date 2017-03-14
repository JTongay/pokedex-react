import React, {PropTypes} from 'react'
import axios from 'axios'

const SingleGenComponent = React.createClass({
    getInitialState() {
        console.log(this.props);
        return {
          chosenGen: this.props.chosenGen,
          generationNumber: null,
          totalPokemon: [],
          region: null
        }
    },

    pokeImgLoop(){
      for(var i = 1; i < 10; i++){
        return (
          <div>
            <img src={`https://veekun.com/dex/media/pokemon/global-link/${i}.png`}/>
          </div>
        )
      }
    },

    render() {
        return (
          <div>
            <h1>Booyah</h1>
            <h2>Gen {this.props.chosenGen.id}</h2>
            {this.pokeImgLoop()}
          </div>
        )
    }
})

export default SingleGenComponent
