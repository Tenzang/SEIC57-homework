class CreateWhiskeys < ActiveRecord::Migration[5.2]
  def change
    create_table :whiskeys do |t|
      t.text :name
      t.float :alcohol_content
      t.integer :aged
      t.integer :brewery_id
    end
  end
end
