import React, { Component } from 'react';
import Container from './Container';
import PropTypes from 'prop-types'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      coords: {
        lat: 0,
        lng: 0
      }
    }
  }

  componentDidMount() {
    // get device's lat/lng coordinates for map
    navigator.geolocation.getCurrentPosition((position) => {
      var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      this.setState({ coords })
    })
  }

  render() {
    return (
      <div>React simple starter
        <Container coords={this.state.coords}/>
      </div>
    );
  }
}
