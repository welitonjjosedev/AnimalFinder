class AddFieldsToOwner < ActiveRecord::Migration[6.1]
  def change
    add_column :owners, :name, :string
    add_column :owners, :phone, :string
    add_column :owners, :city, :string
    add_column :owners, :state, :string
  end
end
