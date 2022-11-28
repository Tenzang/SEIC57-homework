class AddImageToGame < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :image, :text
  end
end
