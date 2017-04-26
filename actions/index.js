import axios from 'axios';
import {API_KEY_WEATHER} from '../utils';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY_WEATHER}`;

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(URL);
  console.log(request, 'action')
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
