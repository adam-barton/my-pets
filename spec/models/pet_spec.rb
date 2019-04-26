require 'rails_helper'

RSpec.describe Pet, :type => :model do
  let(:pet) {
      User.create(
          :id => 1, 
          :name => "Jerk Face",
          :email => "test@test.com"
      )
    Pet.create(
      :name => "A Pet",
      :breed => "Mustang",
      :animal_type => "Horse",
      :user_id => 1,
    )
  }

  it "is valid with a name, breed, animal_type, and owner_id" do
    expect(pet).to be_valid
  end

#   it "has many rides" do
#     user = User.create(name: "Max Charles", password: "password")
#     ride = Ride.create(user_id: user.id, attraction_id: attraction.id)
#     expect(attraction.rides.first).to eq(ride)
#   end

#   it "has many users through rides" do
#     max = User.create(name: "Max Charles", password: "password")
#     skai = User.create(name: "Skai Jackson", password: "password")
#     attraction.users << [max, skai]

#     expect(attraction.users.first).to eq(max)
#     expect(attraction.users.last).to eq(skai)
#   end

end