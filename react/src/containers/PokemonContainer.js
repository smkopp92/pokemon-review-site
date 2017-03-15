import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PokemonList from './../components/PokemonList';

class PokemonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/pokemons')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`;
          let error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          pokemon: body
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div className="pokemonList">
        <h1>Pokemon List</h1>
        <PokemonList pokemon={this.state.pokemon}/>
      </div>
    )
  }
}

export default PokemonContainer
