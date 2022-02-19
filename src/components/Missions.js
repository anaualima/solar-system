import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="teste-Mission">
          {missions.map((m) => (
            <section key={ missions.name }>
              <MissionCard
                name={ m.name }
                year={ m.year }
                country={ m.country }
                destination={ m.destination }
              />
            </section>
          ))}
        </section>
      </div>
    );
  }
}
