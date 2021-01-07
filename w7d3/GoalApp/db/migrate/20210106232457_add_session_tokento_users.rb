class AddSessionTokentoUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :session_token, :text, null: false, unique: true
    add_index :users, :session_token, unique: true
  end
end
