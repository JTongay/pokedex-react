import React from 'react'

export default class SearchBar extends React.Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" />
                    <input type="submit" />
                </form>
            </div>
        )
    }


}