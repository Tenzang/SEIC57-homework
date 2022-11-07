class AddImageToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :image, :text
  end
end
