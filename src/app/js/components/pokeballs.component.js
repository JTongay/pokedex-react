import React, { PropTypes } from 'react'
import {Link, browserHistory} from 'react-router'

export default class PokeBallsComponent extends React.Component {

    constructor(props){
        super()
        this.goToGen = this.goToGen.bind(this)
    }

    goToGen(e){
      this.props.handleGen(this.props.gen.id)
    }

    render(){        
        console.log(this.props)
        return (
            <li>
                <img onClick={this.goToGen} src="http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" />
            </li>
        )
    }


}