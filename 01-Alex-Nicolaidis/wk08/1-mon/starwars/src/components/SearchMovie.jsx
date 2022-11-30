import React, { Component } from 'react'

class SearchMovie extends Component {
    constructor(){
        super()
        this.state = {
            selectionValue: 0 
        }
        this._handleSelection = this._handleSelection.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleSelection(event){
        this.setState({selectionValue: event.target.value})
    }

    _handleSubmit(event){
        event.preventDefault();
        this.props.funct(this.state.selectionValue)
    }


    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <label htmlFor="movies">Select a Movie</label>
                <select name="movies" id='cars'onChange={this._handleSelection}>
                    <option value="0"></option>
                    <option value="1">A New Hope</option>
                    <option value="2">The Empire Strikes Backs</option>
                    <option value="3">Return of the Jedi</option>
                    <option value="4">The Phantom Menace</option>
                    <option value="5">The Attack of the Clone</option>
                    <option value="6">Revenge of the Sith</option>
                </select>
                <button>Read Opening Scroll</button>
            </form>
        )
    }
}

export default SearchMovie