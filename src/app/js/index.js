import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';

import Layout from './components/layout.component';
import Home from './components/home.component';
import AllGens from './components/all.component';
import SingleGen from './components/single.component';

export default class App extends React.Component {

  constructor(props){
    super()
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

  chooseAGen(gen){
    console.log(gen);
  }

  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="/gen" component={AllGens} gens={this.state.gens}></Route>
          <Route path="/gen/:id" component={SingleGen}></Route>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById('wrapper'))
