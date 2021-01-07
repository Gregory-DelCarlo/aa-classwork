require 'faker'

FactoryBot.define do
  factory :user do
    username{ Faker::Cannabis.strain }
    password{'password'}
  end
end