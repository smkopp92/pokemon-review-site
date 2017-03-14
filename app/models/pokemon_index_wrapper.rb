class PokemonIndexWrapper
  attr_reader :pokemon

  def initialize
    @numbers = [1]
    @pokemon = []
    grab_numbers
    grab_pokemon
  end

  private

  def grab_pokemon
    @numbers.each do |number|
      response = Net::HTTP.get_response(uri(number))
      json = JSON.parse(response.body)
      type_2 = json["types"][1]["type"]["name"] if json["types"][1]
      @pokemon << Pokemon.new(
        pokedex_number: number,
        name: json["name"],
        type_1: json["types"][0]["type"]["name"],
        type_2: type_2,
        img_url: "http://serebii.net/art/th/#{number}.png"
      )
    end
  end

  def uri(number)
    URI("http://pokeapi.co/api/v2/pokemon/#{number}/")
  end

  def grab_numbers
    while @numbers.length < 10
      new_number = rand(721) + 1
      @numbers << new_number if !@numbers.include? new_number
    end
  end
end
