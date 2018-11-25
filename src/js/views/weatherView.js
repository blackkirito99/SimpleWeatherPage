export const updateCurrentWeatherView = (currentWeather) => {
    document.querySelector('.current__place').innerHTML = currentWeather.locationName;
    document.querySelector('.current__weather').innerHTML = currentWeather.weather;
    document.querySelector('.current__tempature').innerHTML = `${(currentWeather.temperature - 273.15).toFixed(0)}&deg`;
    updateIcon();
}

const updateIcon = weather =>{
    let className = "current__icon ";

    weather = Math.floor(Math.random()*6)

    switch (weather) {
        case 0: 
            className += "icon-weather-hail";
            break;
        case 1: 
            className += "icon-weather-aries";
            break;
        case 2: 
            className += "icon-weather-cloud";
            break;
        case 3: 
            className += "icon-weather-fog";
            break;
        case 4: 
            className += "icon-weather-fullmoon";
            break;
        case 5: 
            className += "icon-weather-lightning";
            break;
    }

    document.querySelector('.current__icon').className = className;
}