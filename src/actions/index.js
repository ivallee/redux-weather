import axios from 'axios';

const API_KEY = '040a694ca0bd6c9af8e4cddf3bee1a3c';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);
  // redux-promise stops the action and resolves the promise
  // before sending the action with the request data
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}