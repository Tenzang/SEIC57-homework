import React, {Component} from 'react'


class SearchCity extends Component{
    constructor(){
        super();
        this.state = {
            query: ''
        }
        this._handleInput = this._handleInput.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleInput(event){
        this.setState({query: event.target.value})
    }


    _handleSubmit(event){
        event.preventDefault();
        console.log(event.target.value)
        this.props.onSubmit(this.state.query)
    }

    render(){
        return(
            <form onSubmit={ this._handleSubmit }>
                <input type="text" required placeholder="Enter City Here" onChange={ this._handleInput } />
                <input type="submit" value="Click for Weather" />
            </form>
        )
    }
}

export default SearchCity