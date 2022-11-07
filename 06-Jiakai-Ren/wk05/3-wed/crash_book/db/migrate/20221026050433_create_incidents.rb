class CreateIncidents < ActiveRecord::Migration[5.2]
  def change
    create_table :incidents do |t|
      t.integer :flight_number
      t.date :date
      t.text :description
      t.text :image
      t.integer :death
      t.integer :injury
      t.integer :survival
      t.timestamps
      t.integer :airline_id
    end
  end
end
