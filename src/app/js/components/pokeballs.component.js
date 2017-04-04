import React, { PropTypes } from 'react'
import {Link} from 'react-router'

export default class PokeBallsComponent extends React.Component {

    constructor(props){
        super()
    }

    render(){
        console.log(this.props);
        
        return (
            <li key={this.props.gen.id.toString()}>
                <Link to={"gen/" + this.props.gen.id}>
                    <img src="http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" />
                </Link>
            </li>
        )
    }


}