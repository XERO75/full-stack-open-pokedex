import React from 'react';
import { Link } from 'react-router-dom';

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container" href={'/pokemon/' + name}>
      {pokemonList.map(({ id, name }) => (
        <Link
          key={id}
          to={`/pokemon/${name}`}
          className="list-item"
          href={'/pokemon/' + name}
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
          }}
        >
          <div className="list-item-name" href={'/pokemon/' + name}>
            {name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
