require "rails_helper"

RSpec.describe Api::V1::PokemonsController, type: :controller do
  describe "GET #index" do
    it "should return the free curriculum" do
      get :index

      10.times do |i|
        expect(json[i]["name"]).to be_present
        expect(json[i]["pokedex_number"]).to be_present
        expect(json[i]["type_1"]).to be_present
        expect(json[i]["img_url"]).to be_present
      end
    end
  end
end
