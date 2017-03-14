class Api::V1::PokemonsController < ApplicationController
  def index
    render json: PokemonIndexWrapper.new.pokemon
  end
end
