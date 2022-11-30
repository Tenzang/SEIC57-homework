import React, { Component } from 'react'
import SearchMovie from './SearchMovie'
import ShowScroll from './ShowScroll'
import axios from 'axios'

class StarwarsMovie extends Component {
    constructor(){
        super()
        this.state = {
            movieText: "" 
        }
        this.getMovieNumber = this.getMovieNumber.bind(this)
    }

    getMovieNumber(number){
        const starwarsURL = `https://swapi.dev/api/films/${number}`
        console.log(starwarsURL)
        axios(starwarsURL).then((response) => {
            const openText = response.data.opening_crawl
            this.setState({movieText: openText})
        })
    }
    render(){
        return(
            <div>
            <SearchMovie funct={this.getMovieNumber}/>
            <ShowScroll text={this.state.movieText}/>
            </div>
        )
    }
}

export default StarwarsMovie