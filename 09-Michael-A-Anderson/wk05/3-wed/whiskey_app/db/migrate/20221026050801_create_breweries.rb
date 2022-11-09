class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.text :name
      t.text :country
      t.integer :est_year
      t.text :logo
    end
  end
end
