import React, { PropTypes } from 'react'
import axios from 'axios'
import {Link} from 'react-router'

import SingleGenComponent from './single.component';
import PokeballsComponent from './pokeballs.component';

import '../../scss/pokedex.scss'

export default class AllGensComponent extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      gens: [
        {
          id: 1,
          genStart: 1,
          genEnd: 151
        },
        {
          id: 2,
          genStart: 152,
          genEnd: 251
        },
        {
          id: 3,
          genStart: 252,
          genEnd: 386
        },
        {
          id: 4,
          genStart: 387,
          genEnd: 493
        },
        {
          id: 5,
          genStart: 494,
          genEnd: 649
        },
        {
          id: 6,
          genStart: 650,
          genEnd: 721
        },
      ]
    }
  }

  render () {
    let numOfGens = this.state.gens;
    numOfGens = numOfGens.map((gen, index)=>{
      return (
        /*<li key={gen.id.toString()}>
          <Link to={"gen/" + gen.id}>
            <img src="http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" />
          </Link>
        </li>*/
        <PokeballsComponent gen={gen} key={index} />
      )
    })
    return (
        <div>
          <h1>Here are all of the gens</h1>
          <ul>
            {numOfGens}
          </ul>
        </div>
      )
  }
}
