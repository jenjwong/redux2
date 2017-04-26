import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

export  class WeatherList extends PureComponent {
  _renderWeather = (city) => {
    return (
      <tr>
        <td>
          {city.name}
        </td>
      </tr>
    )

  }
  render() {
    console.log(this.props)
    return (
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
    )
  }
}

function mapStateToProps(state) {
  return {weather: state.weather}

}

export default connect(mapStateToProps)(WeatherList);
