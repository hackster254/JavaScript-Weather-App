const ELEMENT_SEARCH_BUTTON = document.querySelector('button');
const ELEMENT_SEARCH_CITY = document.querySelector('#city');

const ELEMENT_LOADING_TEXT = document.querySelector('#load');
const ELEMENT_WEATHER_BOX = document.querySelector('#weather');

const ELEMENT_WEATHER_CITY = ELEMENT_WEATHER_BOX.firstElementChild;
const ELEMENT_WEATHER_DESCRIPTION = document.querySelector('#weatherDescription');
const ELEMENT_WEATHER_TEMPERATURE = ELEMENT_WEATHER_BOX.lastElementChild;

ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    alert('this works!');
}