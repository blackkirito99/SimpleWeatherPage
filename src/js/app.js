import * as WeatherView from './views/weatherView';
import Weather from './models/weather';

window.addEventListener('load', ()=>{
    const  weather = new Weather('Melbourne');
    update(weather);
})

const update = async weather =>{
    weather.updateCurrentWeatherByCity().then(response => {
        WeatherView.updateCurrentWeatherView(weather.currentWeather);
    });
}