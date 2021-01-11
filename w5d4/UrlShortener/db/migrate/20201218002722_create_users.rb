class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.timestamps
    end

              #table  #column #options
    add_index :users, :email, unique:true
  end
end