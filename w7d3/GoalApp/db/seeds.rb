# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
i = 1
100.times do
    user = User.new(username: Faker::Name.name_with_middle, password: 'password')
    begin
        user.save!
    rescue => exception
        user.username = user.username + "#{i}"
        i +=1
    end
end
