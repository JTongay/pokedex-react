import React from 'react'

export default class SearchBar extends React.Component {

    constructor(props) {
        super()
    }

    pokeSearch(e){
        e.preventDefault();
        console.log(this.refs.poke.value);
        this.props.searchForPokemon(this.refs.poke.value)
        this.refs.poke.value = "";
    }

    render() {
        return (
            <div>
                <form onSubmit={this.pokeSearch.bind(this)} >
                    <input type="text" ref="poke" />
                    <input type="submit" value="Look Up Pokemon" />
                </form>
            </div>
        )
    }


}