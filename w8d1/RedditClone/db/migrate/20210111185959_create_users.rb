class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.text :password_digest, null: false 
      t.text :session_token, null: false, unique: true


      t.timestamps
    end

    add_index :users, [:username, :password_digest], unique: true
    add_index :users, :session_token, unique: true
  end
end
