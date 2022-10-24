require "active_record"

ActiveRecord::Base.establish_connection(
    :adapter => "sqlite3",
    :database => "database.sqlite3"
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class CreateAlbumsAndBands < ActiveRecord::Migration[5.2]
    def up
        create_table :bands do |t|
            t.text :name
            t.text :image
        end
        create_table :albums do |t|
            t.belongs_to :band, index: true
            t.text :name
            t.text :image
            t.integer :released_year
            t.text :info
        end
    end
    def down
        drop_table :albums
        drop_table :bands
    end
end

CreateAlbumsAndBands.new.migrate(:up)