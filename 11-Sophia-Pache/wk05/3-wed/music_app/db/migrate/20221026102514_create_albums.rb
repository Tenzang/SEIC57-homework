class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.text :name
      t.integer :tracks
      t.text :label
      t.text :recordedyear
      t.integer :artist_id
      t.text :image
      t.timestamps
    end
  end
end
