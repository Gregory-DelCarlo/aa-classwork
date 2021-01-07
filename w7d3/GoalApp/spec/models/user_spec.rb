require 'rails_helper'
# rpsec is connected to the USER MODEL
RSpec.describe User, type: :model do

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  subject(:user) { FactoryBot.create(:user) }

  it { should validate_uniqueness_of(:username) }

  
end
