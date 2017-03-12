import React, { PropTypes } from 'react'
import axios from 'axios'
import {Link} from 'react-router'

import SingleGenComponent from './single.component'

import '../../scss/pokedex.scss'

const AllGensComponent = React.createClass({
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

  render () {
    let numOfGens = this.state.gens;
    numOfGens = numOfGens.map((gen, index)=>{
      return (
        <li key={gen.toString()}>
          <Link to={"gen/" + gen}>
            <img src="http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" />
          </Link>
        </li>
      )
    })
    if(!this.props.params.id){
      return (
        <div>
          <h1>Here are all of the gens</h1>
          <ul>
            {numOfGens}
          </ul>
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div>
          <h1>Here are all of the gens</h1>
          <ul>
            {numOfGens}
          </ul>
          <SingleGenComponent />
        </div>
      )
    }
  }
})

export default AllGensComponent
