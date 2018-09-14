const ELEMENT_SEARCH_BUTTON = document.querySelector('button');
const ELEMENT_SEARCH_CITY = document.getElementById('city');

const ELEMENT_LOADING_TEXT = document.getElementById('load');
const ELEMENT_WEATHER_BOX = document.getElementById('weather');

const ELEMENT_WEATHER_CITY = ELEMENT_WEATHER_BOX.firstElementChild;
const ELEMENT_WEATHER_DESCRIPTION = document.getElementById('weatherDescription');
const ELEMENT_WEATHER_TEMPERATURE = ELEMENT_WEATHER_BOX.lastElementChild;

ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENT_SEARCH_CITY.value.trim();
    if (CITY_NAME.length === 0) {
        return alert("You did not enter a city name");
    }
    alert(CITY_NAME);
}