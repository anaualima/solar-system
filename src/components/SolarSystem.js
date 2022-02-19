import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planets">
          {planets.map((p) => (
            <p key={ planets.name }>
              <PlanetCard planetName={ p.name } planetImage={ p.image } />
            </p>
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
