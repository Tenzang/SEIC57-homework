class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.text :name
      t.date :dor
      t.text :developer
      t.text :description
      t.timestamps
    end
  end
end
