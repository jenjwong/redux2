import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import {mean as _mean} from 'lodash';

export  class WeatherList extends PureComponent {
  _renderWeather = (city) => {
    const name = city.city.name;
    const temperatures = city.list.map(item => item.main.temp)
    const pressure = city.list.map(item => item.main.pressure)
    const humidity = city.list.map(item => item.main.humidity)
    return (
      <tr key={city.name}>
        <td>
          {name}
          <Chart data={temperatures} color='red' units='Freedome Degrees' avg={Math.floor(_mean(temperatures))} />
          <Chart data={pressure} color='blue' units='barometric things' avg={Math.floor(_mean(pressure))} />
          <Chart data={humidity} color='green' units='more stuffs' avg={Math.floor(_mean(humidity))} />
        </td>
      </tr>
    )

  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this._renderWeather)}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {weather: state.weather}

}

export default connect(mapStateToProps)(WeatherList);
