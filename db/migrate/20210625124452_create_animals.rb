class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.string :name
      t.integer :age
      t.text :extra
      t.string :status

      t.references :owner
      t.timestamps
    end
  end
end
