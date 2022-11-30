import React from 'react';

const CityWeather = function(props){

    return(

        <div>
            <p>{ props.info.current.feelslike_c }</p>
        </div>
    )
};

export default CityWeather;