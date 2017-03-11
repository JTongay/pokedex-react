import React, { PropTypes } from 'react'
import axios from 'axios'
import {Route, Router, Link} from 'react-router'

require('../../scss/home.scss')

const HomeComponent = React.createClass({

  render () {
    //Repeat image to total number of generations

    return (
      <div>
        <h1>Welcome to the React Pokedex! This was all made in React</h1>
        <h3>To navigate to the generations, <Link to="/gen">click here</Link></h3>
      </div>
    )
  }
})

export default HomeComponent
