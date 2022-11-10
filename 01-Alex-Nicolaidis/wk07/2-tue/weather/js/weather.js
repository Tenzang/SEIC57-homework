// http://api.weatherstack.com/current?access_key=ee91dfb269d8da19e507b010dabb663c&query=New York

// link includes personal API key
const link = 'http://api.weatherstack.com/current?access_key=ee91dfb269d8da19e507b010dabb663c&query='

const fetchWeatherInfo = function(location){
    $.ajax(`${link}${location}`).done(function(data){
        const name = data.location.name;
        const weatherIcon = data.current.weather_icons[0]
        console.log(weatherIcon);
        $('<img>').attr('src', weatherIcon).appendTo('#display-info')
    })
}



$('#get-weather').on('submit', function(event){
    event.preventDefault();
    const title = $('#location').val();
    fetchWeatherInfo(title)
})




$('<img>').attr('src', weatherIcon).appendTo('#display-info')