import React, { Component } from 'react';

export default class PlanetCard extends Component {
  render() {
    const planetName = this.props;
    const image = this.props;

    return (
      <div data-testid="planet-card">
        <h3 data-testid="planet-name">{planetName}</h3>
        <img src={image} alt=''/>
      </div>
    );
  }
}
