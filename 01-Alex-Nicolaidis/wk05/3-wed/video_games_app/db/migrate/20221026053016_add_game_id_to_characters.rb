class AddGameIdToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :game_id, :integer
  end
end
