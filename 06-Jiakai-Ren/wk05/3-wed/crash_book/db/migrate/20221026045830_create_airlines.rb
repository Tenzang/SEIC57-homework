class CreateAirlines < ActiveRecord::Migration[5.2]
  def change
    create_table :airlines do |t|
      t.text :name
      t.text :code
      t.text :country
      t.integer :fleet
      t.text :logo
      t.timestamps
    end
  end
end
