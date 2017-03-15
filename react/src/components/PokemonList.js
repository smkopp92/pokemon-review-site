import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = (props) => {
  let pokemons = props.pokemon.map(pokemon => {
    return (
      <Pokemon
        key={pokemon.pokedex_number}
        id={pokemon.pokedex_number}
        name={pokemon.name}
        type_1={pokemon.type_1}
        type_2={pokemon.type_2}
        img_url={pokemon.img_url}
      />
    )
  })
  return (
    <ul>
      {pokemons}
    </ul>
  );
}

export default PokemonList;
