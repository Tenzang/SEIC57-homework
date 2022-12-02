import React, {Component} from 'react'
import SearchCity from './SearchCity'
import CityWeather from './CityWeather'
import axios from 'axios'

class WeatherInfo extends Component {
    constructor(){
        super();
        this.state = {
            info: {}
        }
        this.fetchCity = this.fetchCity.bind(this)
    }

    fetchCity(city){
        console.log('Searching for', city);
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {q: city},
            headers: {
                ' X-RapidAPI-Key': '17ef0a6fe2msh90d32f0b4b63c54p1b2ce3jsn14a06a4ccb67',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        axios.request(options).then((response) =>  {
            this.setState({info: response.data})
        }).catch(function (error) {
            console.error(error);
        });

    }


    render(){
        return(
            <div>
                <SearchCity onSubmit={this.fetchCity} />
                <CityWeather info={this.state.info}/> 
            </div>
        )
    }
}

export default WeatherInfo;