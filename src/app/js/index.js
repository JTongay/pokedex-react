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
  }

  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="/gen" component={AllGens}></Route>
          <Route path="/gen/:id" component={SingleGen} booyah={"booyah"}></Route>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById('wrapper'))
