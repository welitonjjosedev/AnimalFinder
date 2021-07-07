class CreateFounds < ActiveRecord::Migration[6.1]
  def change
    create_table :founds do |t|
      t.string :name
      t.string :phone
      t.text :content
      t.references :animal

      t.timestamps
    end
  end
end
