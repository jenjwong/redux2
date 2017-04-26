import {FETCH_WEATHER} from '../actions';
export default function WeatherReducer(state=[], action) {
  console.log(action, 'reducer')
  switch(action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data];
  }
  return state;
}
