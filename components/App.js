import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/List';



class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
      <WeatherList />
      </div>
    );
  }
}

export default App;
