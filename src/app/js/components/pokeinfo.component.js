import React, { PropTypes } from 'react'

export default class PokeInfoComponent extends React.Component {

    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <p>{this.props.chosenPoke.name}</p>
                <img src={`https://veekun.com/dex/media/pokemon/global-link/${this.props.chosenPoke.game_indices[0].game_index}.png`} alt=""/>
            </div>
        )
    }


}
