import React, { Component } from 'react';
import axios from 'axios';

import Display from './Display';

class Beer extends Component {
    constructor() {
        super();
        this.state = {
            beer: []
        }
        this.fetchBeer = this.fetchBeer.bind(this);
    }

    fetchBeer(f) {
        const fetchURL = 'https://api.punkapi.com/v2/beers ';
        const random = Math.floor(Math.random()*(23)+1);
        axios(fetchURL).then((response) => {
            const beers = response.data[random].name;
            this.setState({beers: beers})
        })
    }

    render() {
        return (
            <div>
                <button value="Generate beer name!" onClick={ this.fetchBeer }>Generate Beer Name</button>
                <Display beers={ this.state.beers } />
            </div>
        )
    }
}

export default Beer;