class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :author_id
      t.text :title
      t.text :language
      t.date :release
      t.text :image
    end
  end
end
