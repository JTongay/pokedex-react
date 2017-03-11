import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, Link} from 'react-router';

import Home from './components/home.component';
import AllGens from './components/all.component';
import SingleGen from './components/single.component';

const App = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/gen" component={AllGens}></Route>
        <Route path="/gen/:id" component={SingleGen}></Route>
      </Router>
    )
  }
})

ReactDOM.render(
    <App/>, document.getElementById('wrapper'))

export default App
