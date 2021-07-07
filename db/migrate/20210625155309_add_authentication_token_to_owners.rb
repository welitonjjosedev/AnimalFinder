class AddAuthenticationTokenToOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :owners, :authentication_token, :string, limit: 30
    add_index :owners, :authentication_token, unique: true
  end
end
