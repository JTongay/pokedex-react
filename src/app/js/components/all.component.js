import React, { PropTypes } from 'react'
import axios from 'axios'
import {Link} from 'react-router'

import SingleGenComponent from './single.component';
import PokeballsComponent from './pokeballs.component';

import '../../scss/pokedex.scss'

export default class AllGensComponent extends React.Component{
  constructor (props) {
    super(props);
  }

  render () {
    console.log(this.props);
    let numOfGens = this.props.route.gens;
    numOfGens = numOfGens.map((gen, index)=>{
      return (
        <PokeballsComponent gen={gen} key={index} handleGen={this.props.route.chooseAGen} />
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
