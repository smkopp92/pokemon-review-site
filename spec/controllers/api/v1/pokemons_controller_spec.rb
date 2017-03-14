require "rails_helper"

RSpec.describe Api::V1::PokemonsController, type: :controller do
  describe "GET #index" do
    it "should return the free curriculum" do
      get :index

      expect(json[0]["name"]).to eq "bulbasaur"
    end
  end
end
