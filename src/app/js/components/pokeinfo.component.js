import React, { PropTypes } from 'react'

export default class PokeInfoComponent extends React.Component {

    constructor(props){
        super()
    }

    render(){
        let something = this.props.chosenPoke.id
        let pokeImg = <img src={`https://veekun.com/dex/media/pokemon/global-link/${something}.png`} alt=""/>

        if(!this.props.chosenPoke.id){
            pokeImg = '';
        }

        return(
            <div>
                <p>{this.props.chosenPoke.name}</p>
                {pokeImg}
            </div>
        )
    }

}
