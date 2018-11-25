import axios from 'axios';
import {key} from '../config';

class Weather{

    constructor(location){
        this.location = location;
    }

    updateLocation(location){
        this.location = location;
    }

    getFutureWeather(){
        //location = "London";
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.location}&APPID=${key}&mode=json`)
        .then(response => {
            console.log(response.data.list[0]);
            this.forecasts = response.data.list.map(el => {
                return {
                    weather: el.weather[0].description,
                    temperature: el.main.temp,
                    time: new Date(parseInt(el.dt * 1000)),
                };
            })
            console.log(this.forecasts);
        })
        .catch(err=> console.log(err));
    }
    updateCurrentWeatherByCityId(){
    }

    updateCurrentWeatherByCoordinate(){
    }

    updateCurrentWeatherByCity(){
        //location = "London";
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&APPID=${key}&mode=json`)
        .then(response => {
            this.currentWeather = {
                locationName: response.data.name,
                weather: response.data.weather[0].description,
                temperature: response.data.main.temp,
            }
            console.log(this.currentWeather);
        })
        .catch(err=> console.log(err));
    }
}

export default Weather;