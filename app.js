import {Http} from "./http.js";
import {WeatherData, WEATHER_PROXY_HANDLER} from "./weather-data.js";

const ELEMENT_SEARCH_BUTTON = document.querySelector('button');
const ELEMENT_SEARCH_CITY = document.getElementById('city');

const ELEMENT_LOADING_TEXT = document.getElementById('load');
const ELEMENT_WEATHER_BOX = document.getElementById('weather');

const ELEMENT_WEATHER_CITY = ELEMENT_WEATHER_BOX.firstElementChild;
const ELEMENT_WEATHER_DESCRIPTION = document.getElementById('weatherDescription');
const ELEMENT_WEATHER_TEMPERATURE = ELEMENT_WEATHER_BOX.lastElementChild;

const APP_ID = 'c9204738afe16537dde4cccc5db59ce0';

ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENT_SEARCH_CITY.value.trim();
    if (CITY_NAME.length === 0) {
        return alert("You did not enter a city name");
    }
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${APP_ID}`;
    Http.fetchData(URL)
        .then(responseData => {
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;
        })
        .catch(error => alert(error));
}