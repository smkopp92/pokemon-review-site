class CreatePokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemons do |t|
      t.integer :pokedex_number, null: false
      t.string :name, null: false
      t.string :type_1, null: false
      t.string :type_2
      t.string :img_url, null: false
    end
  end
end
