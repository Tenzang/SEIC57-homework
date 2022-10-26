class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.text :name
      t.text :category
      t.integer :age
      t.text :ability
      t.timestamps
    end
  end
end
