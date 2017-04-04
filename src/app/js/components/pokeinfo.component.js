import React, { PropTypes } from 'react'

export default class PokeInfoComponent extends React.Component {

    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <p>{this.props.chosenPoke.name}</p>
                <img src={this.props.chosenPoke.sprites.front_default} alt=""/>}
            </div>
        )
    }


}
