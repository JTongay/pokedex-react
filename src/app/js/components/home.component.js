import React, { PropTypes } from 'react'
import axios from 'axios'
import {Route, Router, Link} from 'react-router'

require('../../scss/home.scss')

import SearchBar from './search.component'

export default class HomeComponent extends React.Component {

  constructor(props){
    super()
  }

  render () {
    return (
      <div>
        <h1>Welcome to the React Pokedex! This was all made in React</h1>
        <h3>To navigate to the generations, <Link to="/gen">click here</Link></h3>
        <SearchBar searchForPokemon={this.search} />
      </div>
    )
  }

  search(poke) {
     axios.get("http://pokeapi.co/api/v2/pokemon/" + poke).then((res)=>{
      console.log(res.data);
    })
  }
}
