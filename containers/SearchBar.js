import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';

const INTIAL_STATE = {term: ''}

class SearchBar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  _handleChange = (e) => {
    const text = e.target.value;
    this.setState({term: e.target.value})
  }
  _handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState(INTIAL_STATE);
  }
  render(){
    return(
      <form onSubmit={this._handleSubmit}>
        <input type="text" onChange={this._handleChange} value={this.state.term} placeholder='get five day forcast'/>
        <button>Submit</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
