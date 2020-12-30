class InsertUsers < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      User.create :name => "Ethan", :email => "aaaoo@gmail.com"
      User.create :name => "Rupesh", :email => "aaaaoo@gmail.com"
      User.create :name => "George", :email => "aaaooooo@gmail.com"
    end
  end
end
